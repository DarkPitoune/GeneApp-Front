import PocketBase from "pocketbase";

import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
  if (request.url.includes("/api")) return await next();
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

  let response = await next();

  // send back the default 'pb_auth' cookie to the client with the latest store state
  response.headers.append("set-cookie", locals.pb.authStore.exportToCookie());
  if (!locals.pb.authStore.model && !request.url.includes("/login")) {
    response = new Response(null, { status: 302 });
    response.headers.append("Location", "/login");
  }

  return response;
});
