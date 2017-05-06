// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

const oneAway = (string1, string2) => {
  if (!string1 || ! string2) {
    return false;
  }
  if (string1 === string2) {
    return true;
  }
  let flag = 0;
  if (string1.length === string2.length) {
    for (let i = 0; i < string1.length; i++) {
      if (string1.charAt(i) !== string2.charAt(i)) {
        flag++;
      }
      if (flag > 1) {
        return false;
      }
    }
  } else {
    let shortString = string1.length > string2.length ? string2 : string1;
    let longString = string1.length > string2.length ? string1 : string2;
    for (let i = 0, j = 0; i < shortString.length; i++, j++) {
      if (shortString.charAt(i) !== longString.charAt(j)) {
        i--;
        flag++;
      }
      if (flag > 1) {
        return false;
      }
    }
  }
  return true;
}

const oneAway = (string1, string2) => {
  if (!string1 || ! string2) {
    return false;
  }
  if (Math.abs(string1.length - string2.length)) {
    return false;
  }
  let flag = false;
  for (let i = 0, j = 0; i < string1.length && j < string2.length; i++, j++) {
    if (string1.charAt(i) !== string2.charAt(j)) {
      if (flag) {
        return false;
      }
      if (string1.length > string2.length) {
        j--;
      }
      if (string2.length > string1.length) {
        i--;
      }
      flag = true;
    }
  }
  return true;
}
