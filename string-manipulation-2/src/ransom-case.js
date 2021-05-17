/* exported ransomCase */
function ransomCase(string) {
  var stringed = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      stringed += string[i].toUpperCase();
    } else {
      stringed += string[i].toLowerCase();
    }
  } return stringed;
}
