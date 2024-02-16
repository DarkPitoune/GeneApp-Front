import { APIRoute } from "astro";

export const DELETE: APIRoute = async ({ request, locals }) => {
  const pb = locals.pb;
  const params = new URLSearchParams(request.url.split("?")[1] || "");
  const profileId = params.get("profileId");
  if (!profileId) return new Response("ProfileId is required", { status: 400 });
  try {
    await pb.collection("profiles").delete(profileId);
    return new Response("Profil supprimé !", { status: 200 });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
