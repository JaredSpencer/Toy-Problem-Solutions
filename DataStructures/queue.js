class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  length() {
    return this.count;
  }
  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  dequeue() {
    if (this.count > 0) {
      this.count--;
      let toReturn = this.storage[this.count];
      delete this.storage[this.count];
      return toReturn;
    } else {
      return 'cannot dequeue, queue is empty';
    }
  }
}

class Queue {
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  length() {
    return this.count;
  }
  enqueue(value) {
    this.storage.push(value);
    this.count++;
  }
  dequeue() {
    if (this.count > 0) {
      this.count--;
      return this.storage.unshift();
      // alternatively, return this.storage[this.count];
    } else {
      return 'cannot dequeue, queue is empty';
    }
  }
}
