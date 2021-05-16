/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var firstCut = string.slice(firstIndex, firstIndex + 1);
  var secondCut = string.slice(secondIndex, secondIndex + 1);
  var first = string.slice(string[0], firstIndex);
  var second = string.slice(firstIndex + 1, secondIndex);
  var third = string.slice(secondIndex + 1, string.length);
  var remainder = first + secondCut + second + firstCut + third;
  return remainder;
}
