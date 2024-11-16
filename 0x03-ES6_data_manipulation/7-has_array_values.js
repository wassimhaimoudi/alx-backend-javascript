export default function hasValuesFromArray(mySet, myArray) {
  for (const item of myArray) {
    if (!mySet.has(item)) return false;
  }

  return true;
}
