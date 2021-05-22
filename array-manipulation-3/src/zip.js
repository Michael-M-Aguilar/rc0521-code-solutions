/* exported zip */
var test = [];
function zip(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      return test.push(first[i]);
    }
  }
}
