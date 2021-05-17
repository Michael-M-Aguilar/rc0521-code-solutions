/* exported truncate */
function truncate(length, string) {
  // make a slice of the string, start from 0 to length.
  var answer = string.slice(0, length);
  // return + add an ellipsis ?
  return answer + '...';

}
