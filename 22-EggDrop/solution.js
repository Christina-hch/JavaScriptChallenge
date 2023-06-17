//!Correct Answer!
function eggDrop(n){ 
    let floor = 0;
    let drops = 0;
    while(floor<n){
        drops++
        floor+=drops;
    }
    return drops;
}

//!Correct answer!
// const eggDrop = (n = -1, drops = 0, floor = 0) => {  
//     if (floor >= n) return drops
//     drops++
//     floor += drops
//     return eggDrop(n, drops, floor)
//   }

//!Correct answer!
//   function eggDrop(n){   
//     return Math.round(Math.sqrt(n / 2) * 2);
//   }
  console.log(eggDrop(100));
  
  // Leave this here so we can test your code
  module.exports = eggDrop;