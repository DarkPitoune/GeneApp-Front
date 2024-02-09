import { APIRoute } from "astro";
import pb from "@lib/pb";

export const GET: APIRoute = async () => {
  try {
    pb.authStore.clear();
    const cookie = pb.authStore.exportToCookie();
    console.log("cookie", cookie);

    const response = new Response(null, { status: 302 });
    response.headers.append("set-cookie", cookie);
    response.headers.append("Location", "/login");
    return response;
  } catch (e) {
    return new Response(e.message, { status: 400 });
  }
};
