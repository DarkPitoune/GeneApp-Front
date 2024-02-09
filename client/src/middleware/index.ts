import PocketBase from "pocketbase";

import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
  if (request.url.includes("/api")) return await next();
  locals.pb = new PocketBase("http://127.0.0.1:8090");
  locals.pb.autoCancellation(false);

  locals.pb.authStore.loadFromCookie(request.headers.get("cookie") || "");

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    locals.pb.authStore.isValid &&
      (await locals.pb.collection("users").authRefresh());
    console.log("connected", locals.pb.authStore.model.username);
  } catch (_) {
    // clear the auth store on failed refresh
    locals.pb.authStore.clear();
  }

  const response = await next();

  // send back the default 'pb_auth' cookie to the client with the latest store state
  response.headers.append("set-cookie", locals.pb.authStore.exportToCookie());

  return response;
});
