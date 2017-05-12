// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

const deleteMiddleNode = (list, value) => {
  let node = list.head;
  if (node.value === value) {
    list.head = list.head.next;
    return node;
  }
  while (node.next) {
    if (node.next.value === value) {
      node.next = node.next.next;
      return node.next.value;
    }
    node = node.next;
  }
  return list;
}
