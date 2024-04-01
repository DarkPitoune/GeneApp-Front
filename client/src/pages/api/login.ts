import { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const pb = locals.pb;
    const query = new URL(request.url).searchParams;
    const redirect = query.get("redirect") || "/";
    const body = await request.text();
    const params = new URLSearchParams(body);
    const email = params.get("email");
    const password = params.get("password");
    return pb
      .collection("users")
      .authWithPassword(email, password)
      .then(() => {
        const cookie = pb.authStore.exportToCookie();

        return new Response(null, {
          status: 302,
          headers: {
            "set-cookie": cookie,
            Location: redirect,
          },
        });
      })
      .catch((e) => {
        return new Response(null, {
          status: 302,
          headers: {
            Location: `/login?error=true&redirect=${redirect}`,
          },
        });
      });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
