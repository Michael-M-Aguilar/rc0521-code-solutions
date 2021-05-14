/* exported capitalize */
function capitalize(word) {
  var firstIndex = word[0].toUpperCase();
  var wholeWord = firstIndex;
  for (var i = 1; i < word.length; i++) {
    wholeWord += word[i].toLowerCase();
  } return wholeWord;
}
