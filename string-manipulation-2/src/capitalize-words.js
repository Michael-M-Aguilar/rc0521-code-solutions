/* exported capitalizeWords */
function capitalizeWords(string) {
  var final = '';
  var stringArray = string.toLowerCase().split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    var temporary = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
    if (i === 0) {
      final = temporary;
    } else {
      final = final + ' ' + temporary;
    }
  }
  return final;
}
