/* exported union */
const union = (first, second) => {
  const firsts = first;
  const seconds = second;
  const matchesArray = [];
  let index;

  for (var i = 0; i < firsts.length; i++) {
    for (var j = 0; j < seconds.length; j++) {
      if (firsts[i] === seconds[j]) {
        matchesArray.push(firsts[i]);
      }
    }
  }
  for (var k = 0; k < matchesArray.length; k++) {
    index = seconds.indexOf(matchesArray[k]);
    seconds.splice(index, 1);
  }

  for (var l = 0; l < seconds.length; l++) {
    firsts.push(seconds[l]);
  }

  return firsts;
};
