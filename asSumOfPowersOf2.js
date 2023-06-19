const isEven = (number) => {
  return number % 2 === 0;
};
const powersOfTwo = (n) => {
  let output = [];
  while (2 ** i <= n) {
    output.push([i, 2 ** i]);
    i++;
  }
  return output;
};
const sumsPowersTwo = (n) => {
  let currentValue = n;
  let currentPower = 0;
  let powers = [];
  while (currentValue > 0) {
    if (!isEven(currentValue)) {
      currentValue--;
      powers.push(currentPower);
    } else if (isEven(currentValue)) {
      currentPower++;
      currentValue /= 2;
    }
  }
  return powers.map((x) => 2 ** x);
};

/* My algorithm works as described:
If the current value is odd, subtract 1 at the current power level.
I.e if the current power is 0 then we add 2**0 to the stack. If the
current power is 4 then we add 2**4 = 16 to the stack.
If the current value is even then reduce it by a factor of 2 and
add one to the current power level.
Ex. 25 -> 24 -> 12 -> 6 -> 3 -> 2 -> 1 -> end
p=0    -1    p=1  p=2  p=3   -1  p=4
Gives us: [0,3,4] i.e. [2**0,2**3,2**4] = [1,8,16]
sum([1,8,16]) = 25    
*/
