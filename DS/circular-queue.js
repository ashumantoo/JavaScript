/*************************************************************************************************************************************
 *                                             CIRCULR QUEUE
 * --- VIDEO LINK :- https://www.youtube.com/watch?v=oIR_DOOOACk&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=11
 * 
 * --- The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
 * --- Ciruclar queue is also referred as the "Circular Buffer" or "Ring Buffer" and follow the FIFO principle.
 * --- A circular queue will reused the empty block created during the dequeue operations
 * --- When working with the queue of fixed maximum size, a Queue is a great choice.
 * --- The Circular queue data structure supports two main operations
 *      1. Enqueue : Which adds an element to the rear/tail of the collection
 *      2. Dequeue: Which removes an element from the front/head of the collections
 * 
 * **************************************************************************************************************************************
 */

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    //-1 because initially they will point no where
    this.tail = -1;
    this.head = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      // this.tail = this.tail + 1;
      //We need to use module here because the case where we the queue is full and then we removed one element 
      //in that case the newly added element shoud be inserted into the "0" index not the 5th index, if we don't
      //use the module the tail current counter will be 5. with modulus we can get the 0 index if the queue is full
      this.tail = (this.tail + 1) % this.capacity;
      this.items[this.tail] = element;
      this.currentLength += 1;
      if (this.head === -1) {
        this.head = this.tail;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.head];
    //set deleted index to null
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    this.currentLength = this.currentLength - 1;
    if (this.isEmpty()) {
      //If all the element deleted then set the tail & head to -1 for a fresh operations
      this.tail = -1;
      this.head = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.head];
    }
    return null;
  }


  print() {
    if (this.isEmpty()) {
      return `Queue is empty`;
    } else {
      let i;
      let element = "";
      for (i = this.head; i !== this.tail; i = (i + 1) % this.capacity) {
        element += this.items[i] + " ";
      }
      element += this.items[i]; //for the last element because we stop before the last element
      return element;
    }
  }
}


const circularQueue = new CircularQueue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

console.log(circularQueue.print());
// console.log(circularQueue.isEmpty());
// console.log(circularQueue.isFull());

circularQueue.dequeue();

console.log(circularQueue.print());
console.log(circularQueue.peek());
