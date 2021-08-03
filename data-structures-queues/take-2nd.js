/* exported take2nd */

function take2nd(queue) {
  let first;
  let second;
  if (queue.peek !== undefined) {
    first = queue.dequeue();
  }
  if (queue.peek !== undefined) {
    second = queue.dequeue();
  }

  if (second !== undefined) {
    queue.enqueue(first);
    return second;
  }
  if (first !== undefined) {
    queue.enqueue(first);
    return first;
  }

}
