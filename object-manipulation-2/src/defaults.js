/* exported defaults */
function defaults(target, source) {
  var object = {};
  var targetValues = Object.keys(target);
  var sourceValues = Object.keys(source);
  for (var i = 0; i < targetValues.length; i++) {
    for (var j = 0; j < sourceValues.length; i++) {
      if (targetValues[i] !== sourceValues[i]) {
        object = object[sourceValues[i]];
      }
    }
  }
  // for(var k in object {
  //   if (object[k] === undefined) {
  //     delete object[k]
  //   }
  // }
}
