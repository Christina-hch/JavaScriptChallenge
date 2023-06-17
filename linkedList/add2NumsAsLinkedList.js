// Definition for singly-linked list.
//You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
//     342 + 465 = 807
// Make sure there are no trailing zeros in the output list
// So, 7 -> 0 -> 8 -> 0 is not a valid response even though the value is still 807.
const {createList} = require('./util');
const { get } = require("http");

   function Node(data){
     this.data = data
     this.next = null
   }

module.exports=
{
    addTwoNumbers: function(A, B){
        function getNum(list){
            const arr = [];
            while(list){
                arr.push(list.data);
                list=list.next;
            }
            const newArr=[];
            while(arr.length){
                newArr.push(arr.pop());
            }
            return BigInt(newArr.join(''));  //BigInt !!!
        }
        let sum = getNum(A)+getNum(B);
        return createList(sum);
        },
}