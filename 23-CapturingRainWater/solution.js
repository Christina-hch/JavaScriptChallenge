"use strict";
function capturingRainwater(heights) {
    return heights.reduce((sum,v,i)=>{
        if((i===0)||(i===heights.length-1)) return sum;  //exclude start and end
        let leftMax = Math.max(...heights.slice(0,i+1)); //max include itself to avoid negative value.
        let rightMax = Math.max(...heights.slice(i));
        let cur = Math.min(leftMax,rightMax)-v;
        return sum + cur;
    },0);
  }
  
  const testArray = [4, 2, 1, 3, 0, 1, 2];
 // const testArray = [4,2,1,3];
  console.log(capturingRainwater(testArray));
  
  // Leave this so that we can test your code:
  module.exports = capturingRainwater;