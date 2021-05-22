/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

//   if (first[i] !== second) {
//     return false;
//   } else {
//     return true;
//   }
// }
// for (var i = 0; i < first.length; i++) {
//   for (var j = 0; j < second.length; j++) {
//     if (first[i] !== second[j]) {
//       return false;
//     }
//   }
// }
// return true;
