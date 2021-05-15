/* exported capitalizeWord */
function capitalizeWord(word) {
  // upercase the first letter regardless?
  var upperCase = word[0].toUpperCase();
  var lastElement = word.length;
  var sliced = word.slice(1, lastElement);
  var lowerCase = sliced.toLowerCase();
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var answer = upperCase += lowerCase;
  } return answer;
}
