export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) return '';

  // Filter elements in the set that start with the startString and slice off the prefix
  const result = [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  // Join the resulting array with hyphens
  return result.join('-');
}
