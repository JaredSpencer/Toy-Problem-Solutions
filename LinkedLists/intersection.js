// Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

const intersection = list => {
  let node = list.head;
  let nextNode = list.head.next;

  while (node) {
    if (node === nextNode) {
      return node;
    }
    node = node.next;
    nextNode = nextNode.next.next;
  }
  return false;
}
