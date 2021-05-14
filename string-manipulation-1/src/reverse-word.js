/* exported reverseWord */
function reverseWord(word) {
  var lastIndex = word.length - 1;
  var array = [];
  for (var i = lastIndex; i >= 0; i--) {
    array.push(word[i]);
  }
  return array.join('');
}
