import { Profile } from "@interfaces/profile";
import { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    return new Response("Pas encore implémenté !", { status: 200 });
    const pb = locals.pb;

    const params = new URLSearchParams(request.url.split("?")[1] || "");
    const profile = await pb
      .collection("profiles")
      .getOne<Profile>(params.get("profileId"));
    if (!profile) return new Response("Profile not found", { status: 400 });

    console.log("checking parenthood");
    // Check if the profile already has parents
    const oldParenthood = await pb
      .collection("parenthoods")
      .getFirstListItem(`child.id="${profile.id}"`);
    if (oldParenthood)
      return new Response("Ce profil a déjà des parents", { status: 303 });
    console.log("we gud");
    // First create a father profile
    const fatherData = {
      name: "Père de " + profile.name,
      description: `Le père de ${profile.name}`,
      sex: "M",
      birthDate: profile.birthDate,
    };
    const father = await pb.collection("profiles").create(fatherData);

    // Then create a mother profile
    const motherData = {
      name: "Mère de " + profile.name,
      description: `La mère de ${profile.name}`,
      sex: "F",
      birthDate: profile.birthDate,
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
