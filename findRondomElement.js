'use strict';
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//O(n) It is a constant run time complexity. There is no iteration and we are
// just selecting an element randomly and therefore there is a constant time run complexity.