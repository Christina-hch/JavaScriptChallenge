function knapsack(weightCap, weights, values) {
    // Write your code here
    const leastWeight = weights.sort((a,b)=>a-b)[0];
    while(weightCap>=leastWeight){
        for(let i=0;i<values.length;i++){
            
        }
    }
  };
  
  // Use this to test your function:
  const weightCap = 10;
  const weights = [3, 6, 8];
  const val = [50, 60, 100];
  console.log(knapsack(weightCap, weights, val));
  
  // Leave this so we can test your code:
  module.exports = knapsack;