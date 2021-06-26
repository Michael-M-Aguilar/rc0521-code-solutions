/* exported intersection */
const intersection = (first, second) => {
  const firsts = first;
  const seconds = second;
  const answerArray = [];
  for (var i = 0; i < firsts.length; i++) {
    for (var j = 0; j < seconds.length; j++) {
      if (firsts[i] === seconds[j]) {
        answerArray.push(firsts[i]);
      }
    }
  }
  return answerArray;
};
