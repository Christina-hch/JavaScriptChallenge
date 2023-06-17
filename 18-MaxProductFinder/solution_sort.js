function maxProductFinderK(numbers, size){ 
    // Write your code here
    let sorted = numbers.sort((a,b)=>Math.abs(a)-Math.abs(b));
    let newList=sorted.splice(sorted.length-size,size);
    let negativeNum=newList.filter(x=>x<0).length;
    while(sorted.length&&(negativeNum%2)){
        newList.sort((a,b)=>b-a);
        let replace = newList[newList.length-1];
        if(sorted[sorted.length-1]>0){
            replace=newList.filter(x=>x<0).sort((a,b)=>b-a)[0];
        }
        newList=newList.filter(x=>x!=replace);
        newList.push(sorted.pop());
        negativeNum=newList.filter(x=>x<0).length;
    }
    return newList.reduce((prod,x)=>prod*x,1);
  }
  console.log(maxProductFinderK([-8, 6, -7, 3, 2, 1, -9], 3))
  
  // Leave this so we can test your code:
  module.exports = maxProductFinderK;