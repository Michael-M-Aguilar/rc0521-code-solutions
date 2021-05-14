/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (vowels.includes(char[0])) {
    return true;
  } else {
    return false;
  }
}
