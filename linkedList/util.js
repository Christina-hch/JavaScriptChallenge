function Node(data){
    this.data = data
    this.next = null
  }
exports.createList = function(num){
    const arr = num.toString().split('');
    let newNode = new Node(arr.pop());
    let next = newNode;
    while(arr.length){
        let node = new Node(arr.pop());
        next.next=node;  //!!! must pass value to next first
        next=next.next;   //!!!not pass null first!!!
    } 
    return newNode;
}