function getX(x, nums) {
    // Write your code here
    if((x<1) || (x>nums.length))return 0;   //!!!check x range!!
    return nums.map(a=>parseInt(a)).sort((a,b)=>a-b)[x-1];
  }
  
  console.log(getX(4, [5, 10, -3, -3, 7, 9]));
  console.log(getX(-1, [5, 10, -3, -3, 7, 9]));
  console.log(getX(4, []));
  // Leave this so we can test your code:
  module.exports = getX;