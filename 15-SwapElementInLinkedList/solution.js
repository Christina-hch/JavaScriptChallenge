const Node = require('./Node.js');
const makeLinkedList = require('./makeLinkedList.js');

function swapNodes(list, data1, data2) {  
    let list1 = list;
    let list2 = list;
    while((list1.next!==null)&&(list1.data!==data1)){
      list1=list1.next;
    }
     while((list2.next!==null)&&(list2.data!==data2)){
      list2=list2.next;
    }
     list1.data = data2;
     list2.data = data1;
     return list;   //!!!! return the same list!!!

}

let exampleList = makeLinkedList([1, 2, 3, 4, 5, 6])
let retList = swapNodes(exampleList, 2, 5)
console.log(retList);
// Leave this so we can test your code:
module.exports = swapNodes;