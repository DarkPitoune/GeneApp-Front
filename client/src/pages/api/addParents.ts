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

    // Check if the profile already has parents
    const oldParenthood = await pb
      .collection("parenthoods")
      .getFirstListItem(`child.id="${profile.id}"`)
      // when there is no result, it returns 404
      .catch(() => null);
    if (oldParenthood)
      return new Response("Ce profil a déjà des parents", { status: 303 });

    // create a birthDate 30 years ago
    const birthDate = new Date(profile.birthDate);
    birthDate.setFullYear(birthDate.getFullYear() - 30);
    const birthDateString = birthDate.toISOString().split("T")[0];

    // First create a father profile
    const fatherData: Omit<Profile, "id"> = {
      name: "Père de " + profile.name,
      description: `Le père de ${profile.name}`,
      sex: "M",
      birthDate: birthDateString,
      labels: ["lineagedhebrail"],
    };
    const father = await pb.collection("profiles").create(fatherData);
    // Then create a mother profile
    const motherData: Omit<Profile, "id"> = {
      name: "Mère de " + profile.name,
      description: `La mère de ${profile.name}`,
      sex: "F",
      birthDate: birthDateString,
    };
    const mother = await pb.collection("profiles").create(motherData);
    // Then marry them
    const marriageData = {
      husband: father.id,
      wife: mother.id,
    };
    const marriage = await pb.collection("mariages").create(marriageData);
    // Then create parenthood
    const parenthoodData = {
      child: profile.id,
      mariage: marriage.id,
    };
    const parenthood = await pb
      .collection("parenthoods")
      .create(parenthoodData);
    return new Response("Parents ajoutés !", { status: 201 });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
