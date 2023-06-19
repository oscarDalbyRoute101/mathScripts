// Generates all Mersenne Primes up to and including n.
// A Mersenne Prime is any number which is both prime
// and can be written in the form 2^n - 1.
// It is equivalent to require them be written in
// the form 2^p - 1, where p is also prime.
// 2^n - 1 is composite if n is composite,
// and this can be proved in a single line.
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

const mersennePrimesUpTo = (n) => {
  let output = [];
};
