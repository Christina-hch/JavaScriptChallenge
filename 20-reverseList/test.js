const Node = require('./Node.js');
const makeLinkedList = require('./makeLinkedList.js');

function reverseLinkedList(linkedList){
  // Write your code here
  // if(linkedList==null){
  //   return null;
  // }
  let curNode = linkedList;
  let preNode = null;
  let nextNode = null;
  while(curNode){    
     nextNode = curNode.next;
     curNode.next = preNode;
     preNode = curNode;
     curNode = nextNode;
     nextNode = null;
  }
  return preNode;
}

//Calling your function on an example
console.log("Original")
let exampleLinkedList = makeLinkedList([4,8,15]);
console.log(exampleLinkedList);
//exampleLinkedList.print()
console.log("Reversed")
let reversed = reverseLinkedList(exampleLinkedList)
// reversed.print()

console.log(reversed);
// Leave this here so we can test your code
module.exports = reverseLinkedList;
