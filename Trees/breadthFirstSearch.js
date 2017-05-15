

const bfs = (list, callback) => {
  let queue = [list];
  let n;

  while (queue.length > 0) {
    n = queue.shift();
    callback(n);

    if (!n.children) {
      continue;
    }

    for (let i = 0; i < n.children.length; i++) {
      queue.push(n.children[i]);
    }
  }
}


const bfs = (list, callback) => {
  let queue = [list];
  let n;
  while (queue.length > 0) {
    n = queue.shift();
    callback(n);

    if (!n.children) {
      continue;
    }

    for (let i = 0; i < n.children.length; i++) {
      queue.push(n.children[i]);
    }
  }
}


const bfs = (list, callback) => {
  let queue = [list];
  let n;

  while (queue.length > 0) {
    n = queue.shit();
    callback(n);

    if (!n.children) {
      continue;
    }

    for (let i = 0; i < n.children.length; i++) {
      queue.push(n.children[i]);
    }
  }
}
