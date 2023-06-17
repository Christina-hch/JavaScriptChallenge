function stairmaster(n) {
  let steps=[1,2,3];
  let ways=0;
  if(n<=0){
    return ways;
  }
  for(let i of steps){
    if(n===i){
        ways++;
    }
    ways+= stairmaster(n-i);
  }
  return ways;
}

console.log(stairmaster(4));

// Leave this so we can test your code:
module.exports = stairmaster;
