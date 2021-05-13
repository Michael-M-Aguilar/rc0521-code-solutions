/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  for (const i in array) {
    indexes.push(i);
  }
  return indexes;
}
