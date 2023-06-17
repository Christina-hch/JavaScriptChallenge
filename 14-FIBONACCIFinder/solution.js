function fibFinder(n) {
    // Write your code here
    if(n<=0) return 0;
    if(n===1) return 1;
    return fibFinder(n-2)+fibFinder(n-1);
  }
  
  console.log(fibFinder(6))
  
  // Leave this so that we can test your code:
  module.exports = fibFinder;