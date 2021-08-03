/* exported countValues */

function countValues(stack) {
  const list = [];
  let counter = 0;
  while (stack.peek() !== undefined) {
    list.push(stack.pop());
    counter++;
  }
  return counter;
}
