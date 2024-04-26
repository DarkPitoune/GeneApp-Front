import pb from "@lib/pb";

import { defineMiddleware } from "astro/middleware";

const unauthenticatedPaths = ["/login", "/logout", "/signin", "/waitlist"];

export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
  locals.pb = pb;
  if (unauthenticatedPaths.some((path) => request.url.includes(path)))
    return await next();

  locals.pb.authStore.loadFromCookie(request.headers.get("cookie") || "");

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    locals.pb.authStore.isValid &&
      (await locals.pb.collection("users").authRefresh());
  } catch (_) {
    // clear the auth store on failed refresh
    locals.pb.authStore.clear();
  }

  let response: Response;

  // send back the default 'pb_auth' cookie to the client with the latest store state
  if (!locals.pb.authStore.model && !request.url.includes("/login")) {
    response = new Response(null, { status: 302 });
    const url = new URL(request.url);
    const path = url.pathname + url.search;
    if (path !== "/")
      response.headers.append("Location", `/login?redirect=${path}`);
    else response.headers.append("Location", "/login");
    return response;
  }

  if (!locals.pb.authStore.model.verified) {
    return new Response(null, {
      status: 302,
      headers: { Location: "/waitlist" },
    });
  }

  response = await next();
  response.headers.append("set-cookie", locals.pb.authStore.exportToCookie());
  return response;
});
