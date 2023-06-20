const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const productOfPrimes = (n) => {
  if (isPrime(n / 2)) {
    return true;
  }

  for (let i = 1; i <= Math.sqrt(n) + 1; i += 2) {
    if (isPrime(i)) {
      console.log(isPrime(i), i);
      if (isPrime(n / i)) {
        return true;
      }
    }
  }
  return false;
};
