/* exported getStudentNames */
function getStudentNames(students) {
  var sum = [];
  for (const key in students) {
    sum.push(students[key].name);
  }
  return sum;
}
