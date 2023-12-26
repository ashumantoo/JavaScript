/*****************************************************************************************************************************
 *                                                       QUEUE
 * --- The queue data structure is a sequential collection of elements that follows the principle of FIFO(First In First Out)
 * --- The first element inserted into the queue is the first element to be removed.
 * --- A Queue of people. People enter the queue at one end(tail/rear) and leave the queue from the other end(Head/Front)
 * --- Queue is an abstract data type.
 * --- The Queue data structure support mainly two operations
 *       1. Enqueue, which add the element to the rear/tail of the Queue.
 *       2. Dequeue, Which remove the element from the head/front of the Queue.
 * 
 * QUEUE EXAMPLES:-
 * --- Printers
 * --- CPU task scheduling
 * --- Callback Queue in Javascript Runtime
 * 
 * ****************************************************************************************************************************
 */

class Queue {
  constructor() {
    this.items = [];
  }

  //Add element to the rear/tail of the queue
  add(element) {
    this.items.push(element);
  }

  //Remove element from the head/front of the queue
  remove() {
    return this.items.shift(); //Big-O => O(n) Linear
  }

  //Peek
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  //Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  //size
  size() {
    return this.items.length;
  }

  //Log all the elements of the queue
  print() {
    return this.items;
  }
}

const myQueue = new Queue();
const personQueue = new Queue();

myQueue.add(10);
myQueue.add(20);
myQueue.add(30);

personQueue.add({ name: "Mohan", reason: "Withdraw money" });
personQueue.add({ name: "Radhe Sayam", reason: "Deposit" });
personQueue.add({ name: "Ramesh", reason: 'Open Bank account' })

personQueue.remove();

console.log(myQueue.print());
console.log(personQueue.print());
console.log(personQueue.peek());
console.log(personQueue.size());
console.log(personQueue.isEmpty());
