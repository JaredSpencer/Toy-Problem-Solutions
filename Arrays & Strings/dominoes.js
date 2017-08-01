// determine if two sets of dominoes are matches for each other.

const matchingDominoes = (set1, set2) => {
  // iterate through the sets, making new sets of tuples
  if (set1.length !== set2.length) {
    return false;
  }
  let newSet1 = [];
  let newSet2 = [];
  for (let i = 0; i < set1.length; i += 2) {
    let minTemp1 = Math.min(set1[i], set1[i + 1]);
    let maxTemp1 = Math.max(set1[i], set1[i + 1]);
    let minTemp2 = Math.min(set2[i], set2[i + 1]);
    let maxTemp2 = Math.max(set2[i], set2[i + 1]);
    newSet1.push([minTemp1, maxTemp1]);
    newSet2.push([minTemp2, maxTemp2]);
    // newSet1.push(set1[i], set1[i + 1]);
    // newSet2.push(set2[i], set2[i + 1]);
  }
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
  for (let i = 0; i < newSet1.length; i++) {
    if (newSet1[i][0] !== newSet2[i][0] || newSet1[i][1] !== newSet2[i][1]) {
      return false;
    }
  }
  return true;
}


class Set {
  constructor(dominos) {
    this.box = new Box(dominos);
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
