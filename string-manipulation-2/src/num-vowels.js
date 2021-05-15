/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var lowerCasing = string.toLowerCase();
  if (string === '') return count;
  for (var i = 0; i < lowerCasing.length; i++) {
    if (lowerCasing[i] === 'a' || lowerCasing[i] === 'e' || lowerCasing[i] === 'i' || lowerCasing[i] === 'o' || lowerCasing[i] === 'u') {
      count++;
    }
  }
  return count;
}
