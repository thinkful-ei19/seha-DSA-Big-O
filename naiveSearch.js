'use strict';
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

//O(n) Linear run time complextiy. There is an array and
// for loop. Even array of length increases the number of iterations
// increases at the same rate but we don't need to loop more than once. 