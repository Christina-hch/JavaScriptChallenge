// Given a binary tree, return the inorder traversal of its nodes values.
// NOTE: Using recursion is not allowed.

// Problem Constraints
//  1 <= number of nodes <= 105

// Input Format
// First and only argument is root node of the binary tree, A.

// Output Format
// Return an integer array denoting the inorder traversal of the given binary tree.

// Example Input
// Input 1:

//    1
//     \
//      2
//     /
//    3
// Input 2:

//    1
//   / \
//  6   2
//     /
//    3


// Example Output
// Output 1:

//  [1, 3, 2]
// Output 2:

//  [6, 1, 3, 2]

// Definition for a  binary tree node
   function TreeNode(data){
     this.data = data
     this.left = null
     this.right = null
   }

module.exports = { 
    //param A : root node of tree
    //return a array of integers
       inorderTraversal 
   };


function inorderTraversal(A){
    let arr = [];
    function traversal(A){
        if(A.left){
            traversal(A.left);
        }
        arr.push(A.data);
        if(A.right){
            traversal(A.right);
        }
    }

   traversal(A);
   //return arr;
   console.log(arr);

}