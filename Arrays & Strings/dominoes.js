// determine if two sets of dominoes are matches for each other.

const matchingDominoes = (set1, set2) => {
  // sets of unequal lengths cannot be matches
  if (set1.length !== set2.length) {
    return false;
  }
  let newSet1 = [];
  let newSet2 = [];
  // create tuples, each tuple being a single domino piece
  for (let i = 0; i < set1.length; i += 2) {
    // sort each tuple/domino so that small number is first position
    let minTemp1 = Math.min(set1[i], set1[i + 1]);
    let maxTemp1 = Math.max(set1[i], set1[i + 1]);
    let minTemp2 = Math.min(set2[i], set2[i + 1]);
    let maxTemp2 = Math.max(set2[i], set2[i + 1]);
    newSet1.push([minTemp1, maxTemp1]);
    newSet2.push([minTemp2, maxTemp2]);
    // newSet1.push(set1[i], set1[i + 1]);
    // newSet2.push(set2[i], set2[i + 1]);
  }
  // sort each set of tuples/dominos
  newSet1 = newSet1.sort((a,b) => {
    return a[0] - b[0];
  });
  // you could use these secondary sorts instead of the minTemps, etc., above
  // newSet1 = newSet1.sort((a,b) => {
  //   if (a[0] < b[0]) { return -1; }
  //   if (a[0] > b[0]) { return 1;  }
  //   if (a[1] < b[1]) { return -1; }
  //   if (a[1] > b[1]) { return 1;  }
  // });
  newSet2 = newSet2.sort((a,b) => {
    return a[0] - b[0];
  });
  // newSet2 = newSet2.sort((a,b) => {
  //   if (a[0] < b[0]) { return -1; }
  //   if (a[0] > b[0]) { return 1;  }
  //   if (a[1] < b[1]) { return -1; }
  //   if (a[1] > b[1]) { return 1;  }
  // });
  // iterate through sorted set; if tuples do not match, return false;
  for (let i = 0; i < newSet1.length; i++) {
    if (newSet1[i][0] !== newSet2[i][0] || newSet1[i][1] !== newSet2[i][1]) {
      return false;
    }
  }
  return true;
}

const matchingDominoes = (set1, set2) => {
  if (set1.length !== set2.length) {
    return false;
  }
  // instantiate hashset dictionary
  let dict = new Set();
  // enter each domino/tuple into dictionary
  for (let i = 0; i < set1.length; i += 2) {
    let temp = [Math.min(set1[i], set1[i + 1]), Math.max(set1[i], set1[i + 1])];
    dict.add(temp); // TODO: how would you handle repeats?
  }
  // if any tuple is not in the dictionary return false; if it is, then delete it so as not to double count
  for (let j = 0; j < set2.length; j += 2) {
    let temp = [Math.min(set2[i], set2[i + 1]), Math.max(set2[i], set2[i + 1])];
    if (!(dict.has(temp))) {
      return false;
    } else {
      dict.delete(temp);
    }
  }
  return true;
}


class Set {
  constructor(dominos) {
    this.boxes = [];
    if (dominos) {
      let box = new Box(dominos);
      this.boxes.push(box);
    }
  }
  addBox(dominos) {
    let box = new Box(dominos);
    this.boxes.push(box);
  }
  compareBoxes(box1, box2) {
    if (!(box1 instanceof Box) || !(box2 instanceof Box)) {
      return null;
    }
    if (box1.length !== box2.length) {
      return null;
    }
    box1 = box1.sortBox();
    box2 = box2.sortBox();

    for (let i = 0; i < box1.length; i++) {
      if (box1[i] !== box2[i]) {
        return false;
      }
    }
    return true;
  }
}

class Box {
  constructor(dominos) {
    this.pieces = [];
    this.piece1 = new Domino(dominos[0], dominos[1]); // these need to be in an array; how?
    this.piece2 = new Domino(dominos[2], dominos[3]); // can classes return arrays?
    this.piece3 = new Domino(dominos[4], dominos[5]);
    this.piece4 = new Domino(dominos[6], dominos[7]);
    this.piece5 = new Domino(dominos[8], dominos[9]);
  }
  sortBox() {
    let box = [this.piece1, this.piece2, this.piece3, this.piece4, this.piece5];
    return box.sort((a,b) => {
      return a[0] - b[0];
    });
  }
}

class Domino {
  constructor(num1, num2) {
    this.smallerHalf = Math.min(num1, num2); // can we sort the tuples when instantiated? that will alter the compare method
    this.largerHalf = Math.max(num1, num2);
  }
}
