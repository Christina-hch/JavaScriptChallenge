function uniqueCharacters(stringIn) {
    // const chars = Array.from(stringIn);
    // return chars.every((c,idx)=>stringIn.lastIndexOf(c)===idx);
    if(!stringIn){
        return;   //!!!must return!!!
      }
    
    return (new Set(stringIn)).size==stringIn.length;
}
console.log(uniqueCharacters('45'));
// Leave this so we can test your code:
module.exports = uniqueCharacters;