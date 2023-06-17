function knapsack(weightCap, weights, values) {
    // Write your code here
    let solutions = [0];  //!!!initialize 0!!!
    if((weightCap<0)||(weights.length===0)){
        return 0;
    }
    for(let i = 0; i<weights.length; i++){   
        if(weightCap>=weights[i]){       
            let newWeights = weights.slice(0,i).concat(weights.slice(i+1));
            let newValues = values.slice(0,i).concat(values.slice(i+1));
            solutions.push(values[i] + knapsack(weightCap-weights[i],newWeights,newValues));          
        }
    }
    return solutions.sort((a,b)=>b-a)[0];
  };
  
  // Use this to test your function:
  const weightCap = 10;
  const weights = [3, 6, 8];
  const val = [50, 60, 100];
  console.log(knapsack(weightCap, weights, val));
  
  // Leave this so we can test your code:
  module.exports = knapsack;