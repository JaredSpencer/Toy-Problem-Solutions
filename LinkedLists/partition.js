// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

const partition = (list, value) => {
  let node = list.head;
  let head = list.head;
  while (node) {
    if (node.value === value) {
      break;
    } else {
      node = node.next
    }
  }
  while (head.next.value !== node.value) {
    if (head.next.value > node.value) {
      let temp = head.next;
      temp.next = node.next;
      node.next = temp;
      // now account for having removed it from the front half of the list. Will need to use head.next since you're removing items.
    }
  }
  // while loop doing the same thing but for the second half of the list.
}
