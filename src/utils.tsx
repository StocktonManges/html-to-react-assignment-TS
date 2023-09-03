import { Character } from "../public/fma-data";

export default function sortCharArray(data: Character[]) {
  return data.sort((a, b) => b.votes - a.votes);
}
