import { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals }) => {
  try {
    const pb = locals.pb;
    pb.authStore.clear();
    const cookie = pb.authStore.exportToCookie();

    const response = new Response(null, { status: 302 });
    response.headers.append("set-cookie", cookie);
    response.headers.append("Location", "/login");
    return response;
  } catch (e) {
    return new Response(e.message, { status: 400 });
  }
};
