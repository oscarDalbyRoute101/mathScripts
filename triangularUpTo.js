// Generate all the triangular numbers up to and including n.
// 1, 1+2=3, 1+2+3=6, 1+2+3+4=10, ...

const triangular = (n) => {
  let triangleNumbers = [];
  let tri = 0;
  for (let i = 1; i <= n; i++) {
    tri += i;
    triangleNumbers.push(tri);
  }
  return triangleNumbers;
};
