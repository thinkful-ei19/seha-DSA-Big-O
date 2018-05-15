'use strict';
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}
// O(n^k) It is a Polynomial time complexity. There are nested loops
// over the data set. The first loop and the nested loop have O(n) complexity,
// so even the array of length increases they have the same run time complexity O(n^2).
