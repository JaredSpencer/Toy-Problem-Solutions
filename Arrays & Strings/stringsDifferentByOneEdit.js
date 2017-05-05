// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

const oneAway = (string1, string2) => {
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
  }
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
  return true;
}
