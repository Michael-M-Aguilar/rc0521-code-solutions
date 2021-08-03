/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = index;
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    while (counter !== 0) {
      queue.enqueue(queue.dequeue());
      counter--;
    }
  }
  return queue.dequeue();
}
