import { APIRoute } from "astro";
import pb from "@lib/pb";

export const POST: APIRoute = async ({ request }) => {
  try {
    const query = new URL(request.url).searchParams;
    const redirect = query.get("redirect") || "/";
    const body = await request.text();
    const params = new URLSearchParams(body);
    const email = params.get("email");
    const password = params.get("password");
    await pb.collection("users").authWithPassword(email, password);

    const cookie = pb.authStore.exportToCookie();

    const response = new Response(null, { status: 302 });
    response.headers.append("set-cookie", cookie);
    response.headers.append("Location", redirect);
    return response;
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
