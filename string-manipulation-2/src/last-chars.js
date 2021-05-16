/* exported lastChars */
function lastChars(length, string) {
  var lastIndex = string.length;
  var sliced = string.length - length;
  if (length > lastIndex) {
    return 'LearningFuze';
  } else {
    var answer = string.slice(sliced, lastIndex);
    return answer;
  }
}
