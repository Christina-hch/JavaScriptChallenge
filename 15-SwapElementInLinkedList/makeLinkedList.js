const Node = require('./Node.js');
function makeLinkedList(arr){
    let nextNode = null;
    while(arr.length!=0){
        let data = arr.pop();
        const node = new Node(data);
        if(nextNode!=null){
            node.next = nextNode;
        }       
        nextNode = node;
    }
    return nextNode;
}
module.exports = makeLinkedList;