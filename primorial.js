const isPrime = (n) => {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  let m = Math.sqrt(n); //returns the square root of the passed value
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
};

const primesToN = (n) => {
  let primesUpToN = [];
  for (let i = 1; i > 0; i++) {
    if (isPrime(i) && primesUpToN.length <= n) {
      primesUpToN.push(i);
      if (primesUpToN.length == n) {
        return primesUpToN;
      }
    }
  }
};

const arrProd = (arr) => {
  let primorialProduct = 1;
  for (let j = 0; j <= arr.length - 1; j++) {
    primorialProduct *= arr[j];
  }
  return primorialProduct;
};

let primorial = (num) => arrProd(primesToN(num));
