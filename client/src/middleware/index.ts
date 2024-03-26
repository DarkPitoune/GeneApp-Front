import PocketBase from "pocketbase";

import { defineMiddleware } from "astro/middleware";

const unauthenticatedPaths = ["/login", "/logout", "/signin", "/waitlist"];

export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
  if (unauthenticatedPaths.some((path) => request.url.includes(path)))
    return await next();
  locals.pb = new PocketBase("https://api.genealogie.dhebrail.fr");
  locals.pb.autoCancellation(false);

  locals.pb.authStore.loadFromCookie(request.headers.get("cookie") || "");

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    locals.pb.authStore.isValid &&
      (await locals.pb.collection("users").authRefresh());
  } catch (_) {
    // clear the auth store on failed refresh
    locals.pb.authStore.clear();
  }

  console.log("Auth store state:", locals.pb.authStore.model);
  if (!locals.pb.authStore.model.verified) {
    return new Response(null, {
      status: 302,
      headers: { Location: "/waitlist" },
    });
  }

  let response: Response;

  // send back the default 'pb_auth' cookie to the client with the latest store state
  if (!locals.pb.authStore.model && !request.url.includes("/login")) {
    response = new Response(null, { status: 302 });
    const url = new URL(request.url);
    const path = url.pathname + url.search;
    response.headers.append("Location", `/login?redirect=${path}`);
    return response;
  }

  response = await next();
  response.headers.append("set-cookie", locals.pb.authStore.exportToCookie());
  return response;
});
