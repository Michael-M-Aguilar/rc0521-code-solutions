/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const movingBack = queue.dequeue();
  return queue.enqueue(movingBack);
}
