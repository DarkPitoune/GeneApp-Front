import type { Profile } from "@interfaces/profile";
import type { APIRoute } from "astro";

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
      name: "Conjoint",
      description: "",
      sex: profile.sex === "M" ? "F" : "M",
      birthDate: profile.birthDate,
    };
    const spouse = await pb.collection("profiles").create(spouseData);

    // Then marry him with the profile
    const marriageData = {
      husband: profile.sex === "M" ? profile.id : spouse.id,
      wife: profile.sex === "F" ? profile.id : spouse.id,
    };
    await pb.collection("mariages").create(marriageData);

    return new Response("Mariage ajouté !", {
      status: 201,
      headers: {
        Location: "/tree?profileId=" + spouse.id,
        "HX-Trigger": `tree-refresh-${profile.id}`,
      },
    });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
