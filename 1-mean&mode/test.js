"use strict";
function statsFinder(array) {
    // Write your code here
    let mean = array.reduce((sum,cur)=>sum+cur,0)/(array.length);
    const madeSet = Array.from(new Set(array));
    const numArr = madeSet.map(ele=>({'key':ele,'value':0}));  //!!!!use array.map(), not use object. or the order is wrong!!!
    array.forEach(element => {
        for(let item of numArr){
            if(item.key===element){
                item.value+=1;
            }
        }
    });
    const mode = numArr.sort((a,b)=>b.value-a.value)[0].key;
    return [mean,mode];
  }
  
  console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))
  
  // Leave this so we can test your code:
  module.exports = statsFinder;