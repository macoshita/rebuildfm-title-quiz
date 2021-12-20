function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function sample<T>(arr: T[], size: number): T[] {
  const copy = [...arr];
  const resultSize = Math.min(arr.length, size);
  for (let i = 0; i < resultSize; i++) {
    const j = getRandomInt(arr.length - i) + i;
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, resultSize);
}
