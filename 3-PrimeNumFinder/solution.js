function primeFinder(n) {
    // Write your code here
    return [...Array(n+1).keys()].slice(2).filter(item=> {
          for(let i=2;i<item;i++){
              if(item%i==0){
                  return false;
              }
          }
          return true;
          }
      )
  }
  
  console.log(primeFinder(11))
  
  // Leave this so we can test your code:
  module.exports = primeFinder;