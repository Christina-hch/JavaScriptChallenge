function scoreSorter(array, topScore) {
    // Write your code here
    return array.filter(a=>a<=topScore).sort((a,b)=>b-a); //filter or not filter?!!
  }
  
  console.log(scoreSorter([1, 2, 3, 9999, 13], 10000))
  // Leave this so we can test your code:
  module.exports = scoreSorter;
  