// const _=require('underscore');
function fizzbuzz(n) {
    // Write your code here
    const arr = [...Array(n).keys()].map(n=>++n).map(ele=>{
        if((ele%3===0)&&(ele%5===0)){
            return "FizzBuzz";
        }
        else if(((ele%3===0)&&(ele%5))){
            return "Fizz";
        }
        else if((ele%3)&&(ele%5===0))
        {
            return "Buzz";
        }
        else{
            return ele;
        }
    })
    return arr;
  }
  
  console.log(fizzbuzz(16));
  
  // Leave this line for testing:
  module.exports = fizzbuzz;