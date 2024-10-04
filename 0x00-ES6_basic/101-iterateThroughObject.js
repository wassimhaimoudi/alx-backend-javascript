export default function iterarteThroughObject(reportWithIterator) {
  let resultString = '';
  let nextItem = reportWithIterator.next();

  while (!nextItem.done) {
    resultString += `${nextItem.value} | `;
    nextItem = reportWithIterator.next();
  }
  resultString = resultString.slice(0, -2);

  console.log(resultString);
}
