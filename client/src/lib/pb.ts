import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.SECRET_PB_URL);
// this is kind of suboptimal, ideally we could do without
// I think that since the 'get one' action is 'get many' but filtered,
// getting children after children looks like spamming to the backend
pb.autoCancellation(false);

export default pb;
