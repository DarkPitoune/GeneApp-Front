import { APIRoute } from "astro";
import pb from "@lib/pb";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.text();
    const params = new URLSearchParams(body);
    const name = params.get("name");
    const email = params.get("email");
    const password = params.get("password");
    const passwordConfirm = params.get("passwordConfirm");
    await pb.collection("users").create({
      name,
      email,
      password,
      passwordConfirm,
    });

    const response = new Response(null, { status: 201 });
    response.headers.append("Location", "/waitlist");
    return response;
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
