const {addTwoNumbers} = require('./add2NumsAsLinkedList');
const {reverseBetween} = require('./reverseLinkedList2');
const {createList} = require('./util');
const {reorderList} = require('./reorderLinkedList');
const {mergeTwoLists} = require('./mergeTwoSortedList');
function print(list){
    while(list){
        console.log(list.data);
        list=list.next;
    }
}
// let list1 = createList(3429);
// let list2 = createList(465);
// print(addTwoNumbers(list1,list2));
// let list = createList(987654321);
// print(reverseBetween(list,1,4));

// let list = createList(54321);
// print(reorderList(list));
//  5 -> 8 -> 20 
//   4 -> 11 -> 15
// The merged list should be :

// 4 -> 5 -> 8 -> 11 -> 15 -> 20
let list1 = createList(9631);
let list2 = createList(8752);
print(mergeTwoLists(list1,list2));
