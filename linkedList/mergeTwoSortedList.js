// Merge two sorted linked lists and return it as a new list. 

// The new list should be made by splicing together the nodes of the first two lists, and should also be sorted.

// For example, given following linked lists :

//   5 -> 8 -> 20 
//   4 -> 11 -> 15
// The merged list should be :

// 4 -> 5 -> 8 -> 11 -> 15 -> 20
// Definition for singly-linked list.
   function Node(data){
     this.data = data
     this.next = null
   }

module.exports = { 
    //param A : head node of linked list
    //param B : head node of linked list
    //return the head node in the linked list
       mergeTwoLists : function(A, B){
        let pa = A;
        let pb = B;
        let list = null;
        if(pa.data<pb.data){
            list = new Node(pa.data);
            pa = pa.next;
        }
        let head = list;
        while((pa)&&(pb)){
            if(pa.data<pb.data){
                let node = new Node(pa.data);
                list.next=node;
                list=node;
                pa=pa.next;
            }
            else{
                let node = new Node(pb.data);
                list.next=node;
                list = node;
                pb = pb.next;
            }
        }
        if(pa){
            list.next = pa;
        }
        if(pb){
            list.next = pb;
        }
        return head;
       }
   };
   