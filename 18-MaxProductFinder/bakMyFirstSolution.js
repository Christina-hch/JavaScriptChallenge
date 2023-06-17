"use strict";
function findAllProduct(numbers, size, interProduct=[], products=[]) {
    // Write your code here
    if(size<1){
        if(interProduct.length){
            let curProd= interProduct.reduce((pro,v)=>pro*v,1);
            products.push(curProd);
        }
        return products;
    }
    for(let i=0;i< numbers.length;i++){
        let curLoop=interProduct.slice(0);
        let newNumbers = numbers.slice(0,i).concat(numbers.slice(i+1));
        findAllProduct(newNumbers,size-1,curLoop.concat(numbers[i]),products);
    }
    return products;
  }
  function maxProductFinderK(numbers, size){
    let product = findAllProduct(numbers, size);
    return product.sort((a,b)=>b-a)[0];
  }
  console.log(maxProductFinderK([-8, 6, -7, 3, 2, 1, -9], 3))
  
  // Leave this so we can test your code:
  module.exports = maxProductFinderK;