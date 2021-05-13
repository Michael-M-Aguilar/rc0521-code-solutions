/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var splitted = string.split(' ');
    return splitted;
  }
}
