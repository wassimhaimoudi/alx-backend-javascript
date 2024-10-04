export default function createIteratorObject(report) {
  function* generator(report) {
    for (const dep of Object.values(report.allEmployees)) {
      for (const employee of dep) {
        yield employee;
      }
    }
  }
  return generator(report);
}
