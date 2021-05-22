/* exported flatten */
function flatten(array) {
  return array.concat.apply([], array);
}
