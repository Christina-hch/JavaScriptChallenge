//Reverse a linked list from position m to n. Do it in-place and in one-pass.
// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,
// return 1->4->3->2->5->NULL.
// Note:
// Given m, n satisfy the following condition:
// 1 ≤ m ≤ n ≤ length of list.

// Note 2:
// Usually the version often seen in the interviews is reversing the whole linked list which is obviously an easier version of this question.
//Definition for singly-linked list.

   function Node(data){
     this.data = data
     this.next = null
   }

module.exports = { 
    //param A : head node of linked list
    //param B : integer
    //param C : integer
    //return the head node in the linked list
       reverseBetween : function(A, B, C){
        function getValue(list,idx){
            let next=list;
            for(let i=1;i<idx;i++){
                next = next.next;
            }
            return next.data;
        }
        
        function putValue(list,idx,value){
            let next = list;
            for(let i=1;i<idx;i++){
                next = next.next;
            }
            next.data = value;
        }
        let b = getValue(A,B);
        let c = getValue(A,C);
        putValue(A,B,c);
        putValue(A,C,b);
        return A;
       }
   };

