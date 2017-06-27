// From memory, write the short function to shuffle a deck of cards with complete randomness.

const shuffleDeck = array => {
  let remainingLength = array.lenght;
  let randomIndex;
  let temp;

  while (remainingLength) {
    randomIndex = Math.floor(Math.random() * remainingLength--);
    temp = array[remainingLength];
    array[remainingLength] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
const shuffleDeck = array => {
  let remainingLength = array.length;
  let randomIndex;
  let temp;

  while (remainingLength) {
    randomIndex = Math.floor(Math.random() * remainingLength--);
    temp = array[remainingLength];
    array[remainingLength] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
