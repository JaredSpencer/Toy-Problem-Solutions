
const dfs = (list, callback) => {
  let stack = [list];
  let n;

  while(stack.length > 0) {
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

const dfs = (list, callback) => {
  let stack = [list];
  let n;

  while (stack.length) {
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

// if dfs of graph instead of tree
const dfs = (list, callback) => {
  let stack = [list];
  let n;

  while (stack.length) {
    n = stack.pop();
    callback(n);
    n.visited = true;

    if (!n.children) {
      continue;
    }

    for (let = n.children.length - 1; i >= 0; i--) {
      if (!n.children[i].visited) {
        stack.push(n.chidlren[i]);
      }
    }
  }
}
