import { Parenthood } from "@interfaces/parenthood";
import PocketBase from "pocketbase";

// quick and dirty implementation of a cache
// I don't want to deal with the cache invalidation so it will do

let cache: Parenthood[] = [];
const DEBUG = false;
let timeout: number;

export const getCachedParenthood = async (
  pb: PocketBase,
  marriageId: string,
): Promise<Parenthood[]> => {
  const cacheHits = cache.filter(
    (parenthood) => parenthood.mariage === marriageId,
  );
  if (cacheHits.length > 0) {
    if (DEBUG) console.log("cache hit for", marriageId);
    return cacheHits;
  }

  const parenthoods = await pb
    .collection("parenthoods")
    .getFullList<Parenthood>({ expand: "child" });

  cache = parenthoods;

  if (DEBUG) {
    console.log("cache length", cache.length);
    console.log(
      "I fetched the cache to find ",
      cache.filter((parenthood) => parenthood.mariage === marriageId).length,
    );
  }

  if (!timeout) {
    timeout = setTimeout(() => {
      if (DEBUG) console.log("clearing cache");
      cache = [];
      timeout = undefined;
    }, 1000);
  }

  return cache.filter((parenthood) => parenthood.mariage === marriageId);
};
