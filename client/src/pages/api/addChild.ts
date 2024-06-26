import type { Marriage } from "@interfaces/marriage";
import type { Profile } from "@interfaces/profile";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const pb = locals.pb;

    const params = new URLSearchParams(request.url.split("?")[1] || "");
    const marriage = await pb
      .collection("mariages")
      .getOne<Marriage>(params.get("marriageId"), {
        expand: "husband, wife",
      });
    if (!marriage) return new Response("Marriage not found", { status: 404 });

    const childData: Omit<Profile, "id"> = {
      name: "Enfant",
      description: "",
      sex: "M",
      birthDate: "2000-01-01",
    };
    const record = await pb.collection("profiles").create(childData);

    const parenthoodData = {
      child: record.id,
      mariage: marriage.id,
    };
    await pb.collection("parenthoods").create(parenthoodData);

    return new Response("Enfant ajouté !", {
      status: 201,
      headers: {
        Location: "/tree?profileId=" + record.id,
        "HX-Trigger": `tree-refresh-${marriage.expand.husband.id}`,
      },
    });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
