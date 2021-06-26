/* exported difference */
const difference = (first, second) => {
  const matchArrays = [];
  let index;
  const firsts = first;
  for (var i = 0; i < firsts.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (firsts[i] === second[j]) {
        matchArrays.push(firsts[i]);
      }
    }
  }
  for (var k = 0; k < matchArrays.length; k++) {
    index = firsts.indexOf(matchArrays[k]);
    firsts.splice(index, 1);
    index = second.indexOf(matchArrays[k]);
    second.splice(index, 1);
  }

  for (var m = 0; m < second.length; m++) {
    firsts.push(second[m]);
  }
  return firsts;
};
