// Given an inorder traversal of a cartesian tree, construct the tree.
// Cartesian tree :  is a heap ordered binary tree, where the root is greater than all the elements in the subtree.

// Note: You may assume that duplicates do not exist in the tree.

// Example :

// Input : [1 2 3]

// Return :   
//           3
//          /
//         2
//        /
//       1

// Definition for a  binary tree node
const {inorderTraversal} = require('./inorderTraversal');
   function TreeNode(data){
     this.data = data
     this.left = null
     this.right = null
   }

module.exports = { 
    //param A : array of integers
    //return the root node in the tree
       buildTree 
   };
   
function buildTree(A){
    let root = new TreeNode(A.shift());
    while(A.length){
        let node = new TreeNode(A.shift());
        if(node.data>root.data){
            node.left = root;
            root = node;
        }
        else{
            let cur = root;
            while(cur.right){
                if(node.data>cur.right.data){
                    node.left = cur.right;
                    cur.right = node;
                    break;
                }
                cur=cur.right;
            }
            if(cur.right==null){
                cur.right = node;
            }  
        }
    }
    return root; 
}

//let root = buildTree([2,1,3]);
//let root = buildTree([3,1,2]);
let root = buildTree([1,2,3]);
inorderTraversal(root);