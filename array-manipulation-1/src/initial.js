/* exported initial */
function initial(array) {
  var arrayed = [];
  for (var i = 0; i < array.length - 1; i++) {
    arrayed.push(array[i]);
  }
  return arrayed;
}
