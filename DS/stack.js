/**************************************************************************************************************************
 *                                                         STACK
 * -- The Stack data structure is a sequential collection of elements that follows the Principle of LIFO(Last in first out)
 * -- The last element inserted into the stack is the first element to be removed.
 * -- A stack of plates, The last plate palaced on the top of the stack is also the first to be removed from the stack
 * -- The stack data structure supports two main operations
 *       1. Push, which adds element to the stack
 *       2. Pop, which removes the most recently added element from the stack
 * 
 * STACK USAGE:-
 * --- Browser history traking
 * --- Undo/Redo operations while typing
 * --- Expression conversion
 * --- Call stack in Javascript runtime
 * 
 * BIG-O Time complexity
 * --- Insert => O(1)
 * --- Remove => O(1)
 * --- Access => O(n)
 * --- Search => O(n)
 * 
 * *************************************************************************************************************************
 */

class Stack {
  constructor() {
    this.items = [];
  }

  //Add element to the top of the stack
  add(element) {
    this.items.push(element)
  }

  //Remove and return the element from the top of the stack
  remove() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  //Return the element from top of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  //get all stack items
  getItems() {
    return this.items;
  }

  //check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  //get the size of the stack
  size() {
    return this.items.length;
  }

  //Clear the stack
  clear() {
    this.items = [];
  }
}

const myStack = new Stack();

myStack.add(10);
myStack.add(20);
myStack.add(30);

myStack.remove();
// myStack.clear();

console.log(myStack.isEmpty())
console.log(myStack.getItems());
console.log(myStack.size())
console.log(myStack.peek())


//---------------------------------------------------------------------------------------------------
const NewStack = () => {
  // Private variable to store stack elements
  const items = [];

  // Add element to the top of the stack
  const push = (element) => {
    items.push(element);
  };

  // Remove and return the element from the top of the stack
  const pop = () => {
    if (isEmpty()) {
      return null; // Stack underflow
    }
    return items.pop();
  };

  // Return the element at the top of the stack without removing it
  const peek = () => {
    if (isEmpty()) {
      return null;
    }
    return items[items.length - 1];
  };

  // Check if the stack is empty
  const isEmpty = () => {
    return items.length === 0;
  };

  // Return the size of the stack
  const size = () => {
    return items.length;
  };

  // Clear the stack
  const clear = () => {
    items.length = 0;
  };

  // Public methods accessible outside the closure
  return {
    push,
    pop,
    peek,
    isEmpty,
    size,
    clear,
  };
};

// Example usage:
const newStack = NewStack();

newStack.push(10);
newStack.push(20);
newStack.push(30);

console.log(newStack.peek()); // 30
console.log(newStack.pop());  // 30
console.log(newStack.size()); // 2
console.log(newStack.isEmpty()); // false

newStack.clear();
console.log(newStack.isEmpty()); // true