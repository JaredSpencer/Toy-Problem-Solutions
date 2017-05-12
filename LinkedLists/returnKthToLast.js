// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

const returnKthToLast = (list, k) => {
  let node = list.head;
  let nodeAhead = list.head;
  let i = 0;
  while (i < k) {
    nodeAhead = nodeAhead.next;
    i++;
  }
  while (nodeAhead.next) {
    node = node.next;
    nodeAhead = nodeAhead.next;
  }
  return node;
}
