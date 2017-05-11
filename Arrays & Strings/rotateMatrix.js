// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. (an you do this in place?

const rotateMatrix = (matrix) => {
  matrix = matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let current = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = current;
    }
  }
  return matrix;
};

const rotateMatrixCounterClockwise = (matrix) => {
  matrix = matrix.map((row) => {
    return row.reverse();
  });
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let current = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = current;
    }
  }
  return matrix;
}
