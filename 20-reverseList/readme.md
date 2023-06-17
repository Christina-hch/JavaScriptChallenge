Reverse a Singly-Linked List
Given the head of a linked list, write a function named reverseLinkedList(linkedList) that reverses that linked list. Your function should return the head of a new linked list where the values are in reverse order of the original linked list.

For example, if your original linked list was 4 -> 8 -> 15 -> None, your function should return the head of the linked list 15 -> 8 -> 4 -> None.

For this problem, you’ll be using our custom-built Node class. The constructor for the node class is as follows:

constructor(data){
  this.data = data;
  this.next = null;
}
The head of a linked list is a Node with some data whose next value points to the next Node in the linked list.

This challenge was reported to have been asked at interviews with Google and Amazon. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge.