/* exported chunk */
function chunk(array, size) {
  var arrayed = [];
  if (array === []) {
    return arrayed;
  } else {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j += size) {
        var sizeArray = [];

        // var part1 = array.slice(0, i);
        // arrayed.push(part1);
        // var part2 = array.slice(i, j + 1);
        // arrayed.push(part2);
      }
    }
  }
  return sizeArray;
}
// // make my empty array
// var arrayOnly = [];
// // make my lastIndex
// var totalIndex = array.length;
// // make my second half array
// var counter = totalIndex - size;
// // make an array that is from 0, size.
// var firstHalf = array.slice(0, size);
// // make another array from size, to the last index?
// var dupe = array.slice(counter, totalIndex);
// // push empty array, into both sides.
// arrayOnly.push(firstHalf);
// arrayOnly.push(dupe);
// // return array
// return arrayOnly;
