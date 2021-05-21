/* exported defaults */
function defaults(target, source) {
  var object = {};

  if (Object.keys(target).length === 0) {
    for (var key in source) {
      target[key] = source[key];
    }
  }

  for (var x in source) {
    object[x] = source[x];
  }

  for (var targ in target) {
    for (var def in object) {
      if (targ === def) {
        delete object[def];
      }
    }
  }

  for (var a in object) {
    target[a] = object[a];
  }
}
