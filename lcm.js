const min = (arr) => {
  return Math.min(...arr);
};
const max = (arr) => {
  return Math.max(...arr);
};

const lcm = (α, β) => {
  for (let i = 1; i <= max([α, β]); i++) {
    if ((α * i) % β == 0) {
      return α * i;
    }
  }
};
