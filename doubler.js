'use strict';
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// O(n) It is a linear run time complextiy. There is an array and
// for loop. Even array of length increases the number of iterations
// increases at the same rate but we don't need to loop more than once. 