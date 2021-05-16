/* exported includes */
function includes(array, value) {
  var guard = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return guard;
}
