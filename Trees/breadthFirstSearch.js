
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

  while (queue.length) {
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

// bfs on graph instead of tree
const bfs = (list, callback) => {
  let queue = [list];
  let n;

  while (queue.length) {
    n = queue.shift();
    callback(n);
    n.visited = true;

    if (!n.children) {
      continue;
    }

    for (let i = 0; i < n.children.length; i++) {
      if (!n.children[i].visited) {
        queue.push(n.children[i]);
      }
    }
  }
}



const bfs = (list, callback) => {
  let queue = [list];
  let n;

  while (queue.length) {
    n = queue.shift() // this would be queue.dequeue if using a queue class

    callback(n);
    n.visited = true;

    if (!n.children) {
      continue;
    }
    for (let i = 0; i < n.children.length; i++) {
      if (!n.children[i].visited)
      queue.push(n.children[i]);
    }
  }
}
