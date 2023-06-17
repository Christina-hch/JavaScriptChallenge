function productOfTheOthers(array) {
    // Write your code here
    return array.map((arr,index)=> array.filter((a,idx)=>index!==idx).reduce((product,v)=>
        product*v,1))
  }
  console.log(productOfTheOthers([0, 1, 3, 7, 5]))
  
  // Leave this so we can test your code:
  module.exports = productOfTheOthers;
  