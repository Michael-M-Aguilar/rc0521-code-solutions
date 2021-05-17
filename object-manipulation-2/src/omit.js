/* exported omit */
function omit(source, keys) {
  var temp = {};
  if (Object.keys(source).length === 0) {
    return temp;
  }
  for (var key in source) {
    temp[key] = source[key];
  }
  for (var x in temp) {
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i]) {
        delete temp[x];
      }
    }
  }
  return temp;
}
