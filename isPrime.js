'use strict';
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}


// O(n) it is a linear run time complexity. There is a condition and it takes
// constant time to check the condition. But the function has a loop and it iterates 
// through the loop for each item  so it is a linear run time complexity.