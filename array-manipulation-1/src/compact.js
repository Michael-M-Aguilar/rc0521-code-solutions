/* exported compact */
function compact(array) {
  var arrayed = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      delete array[i];
    } else {
      arrayed.push(array[i]);
    }
  } return arrayed;
}
