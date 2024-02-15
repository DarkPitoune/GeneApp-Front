import { Profile } from "@interfaces/profile";
import { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const pb = locals.pb;

    const params = new URLSearchParams(request.url.split("?")[1] || "");
    const profile = await pb
      .collection("profiles")
      .getOne<Profile>(params.get("profileId"));
    if (!profile) return new Response("Profile not found", { status: 400 });

    // First create the spouse profile
    const spouseData = {
      name: "Conjoint de " + profile.name,
      description: "Le conjoint de " + profile.name,
      sex: profile.sex === "M" ? "F" : "M",
      birthDate: profile.birthDate,
    };
    const spouse = await pb.collection("profiles").create(spouseData);

    // Then marry him with the profile
    const marriageData = {
      husband: profile.sex === "M" ? profile.id : spouse.id,
      wife: profile.sex === "F" ? profile.id : spouse.id,
    };
    const marriage = await pb.collection("mariages").create(marriageData);

    return new Response(JSON.stringify(marriage), {
      status: 201,
      headers: {
        Location: "/tree?profileId=" + spouse.id,
      },
    });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
