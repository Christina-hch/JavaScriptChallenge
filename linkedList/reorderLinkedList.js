//Given a singly linked list

// L: L0 → L1 → … → Ln-1 → Ln,
// reorder it to:

//     L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
// You must do this in-place without altering the nodes’ values.

// For example,

// Given {1,2,3,4}, reorder it to {1,4,2,3}.

// Definition for singly-linked list.
   function Node(data){
     this.data = data
     this.next = null
   }

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
       reorderList : function(A){
            let tail = A;
            let length = 0;
            let addr=[];
            while(tail.next){
                length++;
                addr.push(tail);
                tail = tail.next;
            }
            addr.push(tail);
            length++;
            let mid = Math.floor(length/2);
            
            let head = A;
            for(let i=0;i<mid;i++){
                let t = head.next;
                head.next = tail;
                tail.next = t;
                head=t;
                tail = addr[length-i-2];
            }
            head.next = null;
            return A;
       }
   };
   