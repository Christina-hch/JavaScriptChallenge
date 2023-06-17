function wordReverser(phrase) {
    // Write your code here
    const list = phrase.split(' ');
    const reversed = [];
    while(list.length){
      reversed.push(list.pop());
    }
    return reversed.join(' ');
  }
  
  console.log(wordReverser("Codecademy rules"));
  
  // Leave this so we can test your code:
  module.exports = wordReverser;