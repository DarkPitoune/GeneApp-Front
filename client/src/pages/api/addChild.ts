import { Marriage } from "@interfaces/marriage";
import { Parenthood } from "@interfaces/parenthood";
import { Profile } from "@interfaces/profile";
import { APIRoute } from "astro";

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

    console.log(marriage);
    const childData: Omit<Profile, "id"> = {
      name: marriage.expand.husband.name + " " + marriage.expand.wife.name,
      description: "Enfant",
      sex: "M",
      birthDate: "2000-01-01",
    };
    const record = await pb.collection("profiles").create(childData);

    const parenthoodData = {
      child: record.id,
      mariage: marriage.id,
    };
    const parenthood = await pb
      .collection("parenthoods")
      .create(parenthoodData);

    return new Response("Enfant ajouté !", {
      status: 201,
      headers: {
        Location: "/tree?profileId=" + record.id,
      },
    });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
};
