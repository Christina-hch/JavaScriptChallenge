// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note: You may assume that duplicates do not exist in the tree.

// Example :

// Input : 
//         Inorder : [2, 1, 3]
//         Postorder : [2, 3, 1]

// Return : 
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
   function buildTree (A, B){
        if(A.length==0) return null;
        let root = new TreeNode(B.pop());
        let idx = A.indexOf(root.data);
        if(B.length<1)
        return root;
        let leftA = A.slice(0,idx);
        let rightA = A.slice(idx+1);
        let leftB = B.slice(0,idx);
        let rightB = B.slice(idx);
        root.left=buildTree(leftA,leftB);
        root.right = buildTree(rightA,rightB);
        return root;
   }
   inorderTraversal(buildTree([2,1,3],[2,3,1]));
  // inorderTraversal(buildTree([ 2, 1, 6, 5, 3, 4 ],[ 5, 6, 1, 2, 3, 4 ]));