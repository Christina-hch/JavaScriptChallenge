Swap Elements in a Linked List
Given the head of a linked list and two values within the list, create a swapNodes() function that swaps the nodes with the given values. Your function should return the same list with the nodes swapped.

For example, if your original linked list was named demoList and contained 1 -> 2 -> 3 -> 4 -> 5 -> 6, swapNodes(demoList, 2, 5) should return the list containing 1 -> 5 -> 3 -> 4 -> 2 -> 6.

For this problem, you’ll be using our custom-built Node class. The constructor for the node class is as follows:

constructor(data){
  this.data = data;
  this.next = null;
}
The head of a linked list is a Node with some data whose next value points to the next Node in the linked list.

Variations of this challenge were reported to have been asked at interviews with Google and Amazon. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge with its Swapping Elements in a Linked List walkthrough first.