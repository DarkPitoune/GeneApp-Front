import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const pb = locals.pb;
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

    const response = new Response(null, { status: 302 });
    response.headers.append("Location", "/waitlist");
    return response;
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
