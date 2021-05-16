/* exported takeRight */
function takeRight(array, count) {
  var counter = array.length - count;
  return array.slice(counter);
}
