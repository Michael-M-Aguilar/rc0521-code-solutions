/* exported includesSeven */
function includesSeven(array) {
  var seven = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      seven = true;
    }
  }
  return seven;
}
