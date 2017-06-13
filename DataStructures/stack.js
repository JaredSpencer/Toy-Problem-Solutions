// Implement a Stack class in javascript using pseudoclassical instantiation

class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  length() {
    return this.count;
  }
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    if (this.count > 0) {
      this.count--;
      let toReturn = this.storage[this.count];
      delete this.storage[this.count];
      return toReturn;
    }
  }
}
