class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    print() {
      // outputs node values going down
      // the left side of the tree first
      // then working right
      if (this.left) {
        console.log(`${this.value} -> ${this.left.value}`);
        this.left.print();
      }
  
      if (this.right) {
        console.log(`${this.value} -> ${this.right.value}`);
        this.right.print()
      }
    }
  }
  
  function balancedBst(a) {
    // Write your code here
    if(a.length==0){
      return null;
    }
    const midIdx = parseInt(a.length/2);
    const root = new TreeNode(a[midIdx]);
    const left = a.slice(0, midIdx);
    const right = a.slice(midIdx+1);
    root.left= balancedBst(left);
    root.right = balancedBst(right);
    console.log(root);
    return root;
  }
  
  let a = [1,2,3,4,5,6,7,8]
  let balancedTree = balancedBst(a);
 balancedTree.print();
  
  
  // Leave this so we can test your code:
  module.exports = balancedBst;