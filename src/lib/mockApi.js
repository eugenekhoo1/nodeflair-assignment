// simulate getting job postings via API
import { postings } from "../constants/postings";

const NUM_POSTINGS = 10;

export function getPostings(page) {
  return postings
    .slice(
      Math.max(postings.length - NUM_POSTINGS * page, 0),
      postings.length - NUM_POSTINGS * (page - 1)
    )
    .reverse();
}

export function getMaxPage() {
  return Math.ceil(postings.length / NUM_POSTINGS);
}
