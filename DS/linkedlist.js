/*****************************************************************************************************************************************
 *                                              LINKEDLIST
 * --- Youtube Video Link : https://www.youtube.com/watch?v=Tggvw4QlA9U&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=13
 * 
 * --- A Linkedlist is a linear data structure that includes a series of connected nodes.
 * --- Each node consists of a data value and the a pointer that points to the next node
 * 
 * --- Benefits over the array :- The element can be easily inserted or removed without reallocation or reorganisation of entire structure  
 * --- Drawback :- Random access of element is not feasible and accessing an element has linear time complexisty
 * 
 * --- The LinkedList data structure support mainly three operations:-
 *     1. Insertion :- To add an element to the begining, end or at a given index in the list
 *     2. Deletion  :- To remove an element given it's index or value
 *     3. Searching :- To find an element given it's value
 * 
 * --- Applications of the LinkedList :- All applications of both stack and queues are the applications of LinkedList(Image Viwer)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Initial when we instantiate the linkedList the the head (the pointer of first element) will be null

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  /**
   * --- Add Element to the begining of the list
   * --- If the list is empty then the "head" will point to the first node 
   * --- If the list is not empty then the "head" will be the newly added node and
   *     newly created node next will point to the current head
   */
  // O(1) - CONSTANT
  prepend(value) {
    const node = new Node(value);
    //if list is empty
    if (this.isEmpty()) {
      this.head = node;
    } else {
      //List is not empty
      node.next = this.head;
      this.head = node;
    }
    this.size++
  }

  //Insert element to the given index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previousNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }
      node.next = previousNode.next;
      previousNode.next = node;
      this.size++;

    }
  }
  //Add element to the end of the list
  // O(n) - LINEAR
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      //List is not empty: need to iterate over the list untill we find the node.next is null
      //Since we only know the first node which is head, we will start with the head
      let previousNode = this.head;
      while (previousNode.next) {
        previousNode = previousNode.next;
      }
      previousNode.next = node;
    }
    this.size++;
  }

  print() {
    //if list is empty
    if (this.isEmpty()) {
      console.log("List is empty")
    } else {
      //list not not empty
      let current = this.head;
      let elementValues = "";
      while (current) {
        elementValues += ` ${current.value}`;
        current = current.next;
      }
      console.log("List values are -", elementValues)
    }
  }
}

const linkedList = new LinkedList();

console.log("LinkedList is empty ", linkedList.isEmpty());
console.log("Size of the linkedList ", linkedList.getSize());

// linkedList.append(10)
// linkedList.append(20)
// linkedList.append(30)

// linkedList.print();

linkedList.insert(10, 0)

linkedList.print();
// console.log("LinkedList is empty ", linkedList.isEmpty());
// console.log("Size of the linkedList ", linkedList.getSize());

linkedList.insert(20,0);
linkedList.print();

linkedList.insert(30,1);
linkedList.print();

