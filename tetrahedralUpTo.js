// Tetrahedral numbers are the result of building a tetrahedron
// out of objects, i.e. balls, then counting how many objects makes
// up a tetrahedron. It is equivalent to summing progressive
// triangular numbers (hence the use of triangular).

const triangular = (n) => {
  let triangleNumbers = [];
  let tri = 0;
  for (let i = 1; i <= n; i++) {
    tri += i;
    triangleNumbers.push(tri);
  }
  return triangleNumbers;
};

const sumArray = (arr) => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const tetra = (n) => {
  return sumArray(triangular(n));
};
