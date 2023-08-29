import { Character } from "../../public/fma-data";

export function sortCharArray(data: Character[]) {
  const compare = (a: Character, b: Character) => b.votes - a.votes;
  return data.sort(compare);
}
