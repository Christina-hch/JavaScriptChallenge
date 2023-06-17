function missingNos(array, k) {
    const oriArr = [...Array(array.length+k).keys()].map(a=>++a);
    const missing=[];
    for(let num of oriArr){
        if(!array.includes(num)){
            missing.push(num);
        }
    }
    return missing;
}

const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(missingNos(testArray, 2));

// Leave this so we can test your code:
module.exports = missingNos;