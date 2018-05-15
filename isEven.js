'use strict';
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else
    return false;
}

// O(1) It is a constant run time complexity since there is no loop and there 
// is only one value. Even the value changes and gets bigger, we only divide it by 2. 