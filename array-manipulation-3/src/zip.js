/* exported zip */
const zip = (first, second) => {
  let minString = first.length;

  if (first.length < second.length) {
    minString = first.length;
  } else if (first.length > second.length) {
    minString = second.length;
  }

  let tempArray = [];
  const answerArray = [];
  for (var i = 0; i < minString; i++) {
    tempArray.push(first[i]);
    tempArray.push(second[i]);
    answerArray.push(tempArray);
    tempArray = [];
  }
  return answerArray;
};
