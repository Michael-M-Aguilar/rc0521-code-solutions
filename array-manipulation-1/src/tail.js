/* exported tail */
function tail(array) {
  var arrayed = [];
  for (var i = 1; i < array.length; i++) {
    arrayed.push(array[i]);
  }
  return arrayed;
}
