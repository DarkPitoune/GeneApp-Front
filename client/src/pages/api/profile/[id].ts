import type { APIRoute } from "astro";

export const DELETE: APIRoute = async ({ request, locals }) => {
  const pb = locals.pb;
  // remove possible trailing slash
  const url =
    request.url.charAt(request.url.length - 1) === "/"
      ? request.url.slice(0, -1)
      : request.url;
  const profileId = url.split("/").pop();

  if (!profileId) return new Response("ProfileId is required", { status: 400 });
  try {
    await pb.collection("profiles").delete(profileId);
    return new Response("Profil supprimé !", { status: 200 });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};

export const PUT: APIRoute = async ({ request, locals }) => {
  const pb = locals.pb;
  // remove possible trailing slash
  const url =
    request.url.charAt(request.url.length - 1) === "/"
      ? request.url.slice(0, -1)
      : request.url;
  const profileId = url.split("/").pop();

  const reader = await request.formData();
  // @ts-expect-error it works so..
  const data = Object.fromEntries(reader.entries());
  const deletePhotos = data.deletePhotos.split(";").filter((x: string) => x);

  if (!data.sex || data.sex != "on") data.sex = "F";
  else data.sex = "M";

  if (!profileId || !data.name || !data.sex || !data.birthDate) {
    return new Response("Incomplete data", { status: 400 });
  }

  const record = await pb
    .collection("profiles")
    .update(profileId, { data, "photos-": deletePhotos });
  const response = new Response(null, {
    status: 200,
    headers: {
      Location: `/profile/partial/${record.id}`,
      "HX-Trigger": `tree-refresh-${profileId}`,
    },
  });
  return response;
};
