export default function cleanSet(set, startString) {
  if (!startString) return '';

  let resultString = '';
  let flag = 1;

  for (const stringElement of set) {
    if (stringElement.startsWith(startString)) {
      if (!flag) {
        resultString += '-';
      }

      resultString += stringElement.slice(startString.length);
      flag = 0;
    }
  }

  return resultString;
}
