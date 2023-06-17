// Given preorder and inorder traversal of a tree, construct the binary tree.
// Note: You may assume that duplicates do not exist in the tree.


// Problem Constraints
// 1 <= |A| <= 105
// |A| == |B|

// Input Format
// The first argument is an integer array A representing the preorder traversal.
// The second argument is an integer array B representing the inorder traversal.

// Output Format
// Return the pointer to the root node of the tree.

// Example Input
// Preorder : [1, 2, 3]
// Inorder  : [2, 1, 3]

// Example Output
//             1
//            / \
//           2   3

const {inorderTraversal} = require('./inorderTraversal');
// Definition for a  binary tree node
   function TreeNode(data){
     this.data = data
     this.left = null
     this.right = null
   }

module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //return the root node in the tree
       buildTree 
   };
   function buildTree(A, B){
    if(A.length==0)
    return null;
    let root = new TreeNode(A.shift());
    let idx = B.indexOf(root.data);
    if(A.length<1){
        return root;
    }
    let leftA = A.slice(0,idx);
    let rightA = A.slice(idx);
    let leftB = B.slice(0,idx);
    let rightB = B.slice(idx+1);
    root.left = buildTree(leftA,leftB);
    root.right = buildTree(rightA,rightB);
    return root;
   }
  // inorderTraversal(buildTree([1,2,3],[2,1,3]));
//    A : [ 2, 1, 6, 5, 3, 4 ]
//    B : [ 5, 6, 1, 2, 3, 4 ]
inorderTraversal(buildTree([ 2, 1, 6, 5, 3, 4 ],[ 5, 6, 1, 2, 3, 4 ]));