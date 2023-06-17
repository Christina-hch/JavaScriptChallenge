// Implement pow(x, n) % d.
// In other words, given x, n and d,
// Find (xn % d)
// Note that remainders on division cannot be negative. In other words, make sure the answer you return is non-negative integer.

// Problem Constraints
// -109 <= x <= 109
// 0 <= n <= 109
// 1 <= d <= 109

// Example Input
// Input 1:
// x = 2
// n = 3
// d = 3
// Input 2:
// x = 5
// n = 2
// d = 6

// Example Output
// Output 1:
// 2
// Output 2:
// 1

// Example Explanation
// Explanation 1:
// 23 % 3 = 8 % 3 = 2.
// Explanation 2:
// 52 % 6 = 25 % 6 = 1.

// module.exports = { 
// 	//param A : integer
// 	//param B : integer
// 	//param C : integer
// 	//return an integer
// 	pow : function(A, B, C){
// 	}
// };
// function Tree(value){
//     this.value = value;
//    // this.mod = mod;
//     this.left=null;
//     this.right = null;
// }

function pow(A,B,C){
    if(B===1){
        let mod = (A%C+C)%C;
        // if(mod<0){
        //     mod+=C;
        // }
        return mod;
    }
    else if(B>1){
        let rightVal = Math.floor(B/2);
        let leftVal = B-rightVal;
        let leftMod = pow(A,leftVal,C);
        let rightMod = pow(A,rightVal,C);
        let mod = (leftMod*rightMod)%C;
        return mod;
    }
}
//console.log(pow(81658051,82979950,40600602)); //result: 6559729
//console.log(pow(2,3,3));
console.log(pow(44817751,42705765,82547554));
//A : 88244449
// B : 70779074
// C : 55802312
// The expected return value: 
// 13460825
// A : 44817751
// B : 42705765
// C : 82547554

// The expected return value: 
// 72611807