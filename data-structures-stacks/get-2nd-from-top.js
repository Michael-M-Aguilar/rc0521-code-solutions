/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let top;
  let second;
  // for if the stack is empty.
  if (stack.peek() === undefined) {
    return undefined;
  }
  // Take most top, store it into top.
  if (stack.peek() !== undefined) {
    top = stack.pop();
  }
  // if next card after top is still not undefined, take second.
  if (top.peek() !== undefined) {
    second = stack.pop();
  }
  // push second
  if (second.peek() !== undefined) {
    stack.push(second);
  }
  // push first
  if (top !== undefined) {
    stack.push(top);
  }
  return second;
}
