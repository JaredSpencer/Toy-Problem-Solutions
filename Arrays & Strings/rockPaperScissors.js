
const RPS = (num = 3)=> {
  let throws = ['rock', 'paper', 'scissors'];
  let allThrows = [];

  let throwMaker = (currThrow = [], throwsLeft = num) => {
    if (throwsLeft === 0) {
      allThrows.push(currThrow);
      return;
    }

    for (let i = 0; i < throws.length; i++) {
      throwMaker(currThrow.concat([throws[i]]), throwsLeft - 1);
    }
  }
  throwMaker();
  return allThrows;
};
