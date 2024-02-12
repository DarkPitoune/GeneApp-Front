import { APIRoute } from "astro";
import pb from "@lib/pb";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.text();
    const params = new URLSearchParams(body);
    const email = params.get("email");
    const password = params.get("password");
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    const cookie = pb.authStore.exportToCookie();

    const response = new Response(null, { status: 302 });
    response.headers.append("set-cookie", cookie);
    response.headers.append("Location", "/");
    return response;
  } catch (e) {
    return new Response(e.message, { status: 400 });
  }
};
