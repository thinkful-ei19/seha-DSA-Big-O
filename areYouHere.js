'use strict';
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
// O(n^k) It is a Polynomial time complexity. There are nested loops
// over the data set. Even first array of length increased one or more 
// we need to loop thorugh array2. So the times take (arr1.length * arr2.length)
