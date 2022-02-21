export default function areObjectsEqual(o1, o2) {
  if (o1 === o2) return true;

  if (typeof o1 !== "object" || typeof o2 !== "object" || typeof o1 === null || typeof o2 === null) return false;

  const o1Keys = Object.keys(o1);
  const o2Keys = Object.keys(o2);

  //check if keys are equal

  if (o1Keys.length !== o2Keys.length) return false;

  if (o1Keys.every(key => !o2Keys.includes(key))) return false;

  //check values recursively

  for (const key of o1Keys) {
    if (!areObjectsEqual(o1[key], o2[key])) return false;
  }

  return true;
}
