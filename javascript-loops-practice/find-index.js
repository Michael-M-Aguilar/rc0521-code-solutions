/* exported findIndex */
function findIndex(array, value) {
  var missing = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      missing = i;
      return missing;
    }
  } return missing;
}
