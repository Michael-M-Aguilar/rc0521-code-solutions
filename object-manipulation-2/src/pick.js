/* exported pick */
function pick(source, keys) {
  var answer = {};
  for (const key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        answer[key] = source[key];
      }
    }
  }
  for (var x in answer) {
    if (answer[x] === undefined) {
      delete answer[x];
    }
  }
  return answer;
}
