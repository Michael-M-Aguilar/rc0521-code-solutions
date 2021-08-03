/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return undefined;
  let next = queue.dequeue();
  while (queue.peek() !== undefined) {
    if (next < queue.peek()) {
      return next;
    } else {
      queue.enqueue(next);
      next = queue.dequeue();
    }
  }
  return next;
}
// let lowest = +Infinity;
// while (queue.peek() !== undefined) {
//   const next = queue.dequeue();
//   if (next < lowest) {
//     lowest = next;
//   }
// }
