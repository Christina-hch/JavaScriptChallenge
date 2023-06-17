//Sort a linked list in O(n log n) time using constant space complexity.
// Example :
// Input : 1 -> 5 -> 4 -> 3
// Returned list : 1 -> 3 -> 4 -> 5

// Definition for singly-linked list.
   function Node(data){
     this.data = data
     this.next = null
   }

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
       sortList : function(A){
        let arr = [];
        let point = A;
        while(point){
            arr.push(point.data);
            point = point.next;  //!!!
        }
        arr = arr.sort((a,b)=>a-b);
        let newNode = new Node(arr.pop());
        let p = newNode;
        while(arr.length){
            let node = new Node(arr.pop());
            p.next = node;
            p = node;
        }
        return newNode;
       }
   };
   