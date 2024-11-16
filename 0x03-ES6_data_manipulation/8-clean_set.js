export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) return '';

  let resultString = '';
  let flag = 0;

  for (const stringElement of set) {
    if (typeof stringElement === 'string' && stringElement.startsWith(startString)) {
      if (flag) {
        resultString += '-';
      }

      resultString += stringElement.split(startString)[1];
      flag = 1;
    }
  }

  return resultString;
}
