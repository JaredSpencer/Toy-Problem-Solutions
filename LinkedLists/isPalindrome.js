// Palindrome: Implement a function to check if a linked list is a palindrome.

const isPalindrome = list => {
  let stack = [];
  let node = list.head;
  let n;

  for (let i = Math.floor(list.length / 2); i >= 0; i--) {
    stack.push(node.value);
    node = node.next;
  }

  if (list.length % 2 !==) {
    node = node.next;
  }

  while (node) {
    if (node.value !== stack.pop()) {
      return false;
    }
    node = node.next;
  }
  return true; // alternatively, return stack.length === 0;
}
