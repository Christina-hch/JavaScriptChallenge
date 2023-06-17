function flattenArray(array) {
    // Write your code here
    const newArr=[];
    array.forEach(element => {
      if(Array.isArray(element)){
        newArr.splice(newArr.length,0,...element);
      }
      else{
        newArr.push(element);
      }
    });
    return newArr;
  }
  
  console.log(flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]))
  
  // Leave this so we can test your code:
  module.exports = flattenArray;