// Remove Dups: Write code to remove duplicates from an unsorted linked list.

const removeDuplicates = (list) => {
  let library = new Set();
  let node = list.head;
  library.add(node.value);
  while (node.next) {
    if (!library.has(node.next.value)) {
      library.add(node.next.value);
      node = node.next;
    } else {
      node = node.next.next;
    }
  }
  return list;
}
