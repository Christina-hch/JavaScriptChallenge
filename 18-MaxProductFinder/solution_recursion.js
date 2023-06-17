"use strict";
 function maxProductFinderK(numbers, size, product=1,max = -Infinity){ //max = -Infinity;  //!!
    // Write your code here
    if(size<1){                    
        if(product>max) 
            max = product;
        return max;
    }
    for(let i=0;i< numbers.length;i++){
        let newNumbers = numbers.slice(0,i).concat(numbers.slice(i+1));
        max = maxProductFinderK(newNumbers,size-1,product*numbers[i],max);
    }
    return max;
  }
  console.log(maxProductFinderK([-8, 6, -7, 3, 2, 1, -9], 3))
  
  // Leave this so we can test your code:
  module.exports = maxProductFinderK;
//   /* More Reference
//   function maxProductFinderK(numbers, size) {
//     let max = -Infinity;
//     function getNextFactor(factor, result, excludes) {
//       if (factor > size) {
//         if (result > max) max = result;
//         return;
//       }
//       for (let i = 0; i < numbers.length; i++) {
//         if (excludes.has(i)) continue;
//         const excludesNew = new Set(excludes);
//         excludesNew.add(i);
//         getNextFactor(factor + 1, result * numbers[i], excludesNew);
//       }
//     }
//     getNextFactor(1, 1, new Set());
//     return max;
//   }