/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (const key in object) {
    array.push(key);
  } return array;
}
