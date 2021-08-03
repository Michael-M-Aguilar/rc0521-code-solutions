/* exported takeSmaller */

function takeSmaller(queue) {
  let lowest = +Infinity;
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (queue.peek() !== undefined) {
    const first = queue.dequeue();
    if (first < lowest) {
      lowest = first;
    }
    if (queue.peek() !== undefined) {
      const second = queue.dequeue();
      if (first > second) {
        queue.enqueue(first);
        return second;
      } else if (first === second) {
        queue.enqueue(first);
        return second;
      } else {
        queue.enqueue(second);
        return first;
      }
    }
  }
  return lowest;

}
