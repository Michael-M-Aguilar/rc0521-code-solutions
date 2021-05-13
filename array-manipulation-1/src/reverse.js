/* exported reverse */
function reverse(array) {
  var arrayed = [];
  var lastIndex = array.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    arrayed.push(array[i]);
  }
  return arrayed;
}
