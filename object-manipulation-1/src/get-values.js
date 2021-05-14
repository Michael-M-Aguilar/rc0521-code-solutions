/* exported getValues */
function getValues(object) {
  var array = [];
  for (const key in object) {
    array.push(object[key]);
  } return array;
}
