import PocketBase from "pocketbase";

const pb = new PocketBase("https://api.genealogie.dhebrail.fr");
pb.autoCancellation(false);

export default pb;
