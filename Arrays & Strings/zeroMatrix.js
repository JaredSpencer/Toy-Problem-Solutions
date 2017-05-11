const zeroMatrix = matrix => {
  let toChange = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        toChange.push([i,j]);
      }
    }
  }
  for (let i = 0; i < toChange.length; i++) {
    let length = matrix[toChange[i][0]].length;
    matrix[toChange[i][0]] = new Array(length).fill(0);
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][toChange[i][1]] = 0;
    }
  }
  return matrix;
}
