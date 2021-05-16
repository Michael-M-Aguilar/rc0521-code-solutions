/* exported dropRight */
function dropRight(array, count) {
  var lastIndex = array.length;
  var counter = lastIndex - count;
  return array.slice(0, counter);
}
