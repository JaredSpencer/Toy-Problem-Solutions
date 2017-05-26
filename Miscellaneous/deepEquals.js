/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  const deepEquals = (apples, oranges) => {
    if (apples === oranges) { return true; }
    if (apples && !oranges || !apples && oranges) { return false; }
    if (!(apples instanceof Object) || !(oranges instanceof Object)) { return false; }
    let appleKeys = Object.keys(apples);
    let orangeKeys = Object.keys(oranges);
    if (appleKeys.length !== orangeKeys.length) { return false; }
    if (appleKeys.length === 0) { return true; } // two empty objects are equal
    for (let i = 0; i < appleKeys.length; i++) {
      if (!deepEquals(apples[appleKeys[i]], oranges[appleKeys[i]])) { return false; }
    }
    return true;
  }
