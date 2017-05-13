

const dfs = (list, callback) => {
  let stack = [list];
  let n;

  while (stack.length > 0) {
    n = stack.pop();
    callback(n);

    if (!n.children) {
      continue;
    }

    for (let i = n.children.length - 1; i >= 0; i--) {
      stack.push(n.children[i]);
    }
  }
}
