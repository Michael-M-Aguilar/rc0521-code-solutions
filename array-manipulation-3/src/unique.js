/* exported unique */
const unique = array => {
  const answerArray = [];
  if (array === []) {
    return answerArray;
  }
  for (var i = 0; i < array.length; i++) {
    if (!answerArray.includes(array[i])) {
      answerArray.push(array[i]);
    }
  }
  return answerArray;
};
