class Queue {
  constructor() {
    this.items = {};
    this.tail = 0;
    this.head = 0;
  }

  //Add element to the tail of the queue
  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  //Remove element from the head of the queue
  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  //Peek
  peek() {
    return this.items[this.head];
  }

  //Print all the elements
  print() {
    return this.items;
  }

  //isEmpty
  isEmpty() {
    return (this.tail - this.head) === 0
  }

  //size
  size() {
    return this.tail - this.head;
  }

  //get head counter
  headCounter() {
    return this.head;
  }

  //get tail counter
  tailcounter() {
    return this.tail;
  }

  //clear
  clear() {
    this.items = {};
  }
}

const personQueue = new Queue();

personQueue.enqueue({ name: "Mohan", reason: "Withdraw money" });
personQueue.enqueue({ name: "Radhe Sayam", reason: "Deposit" });
personQueue.enqueue({ name: "Ramesh", reason: 'Open Bank account' });

personQueue.dequeue();

console.log(personQueue.isEmpty());
console.log(personQueue.size());
console.log(personQueue.print());
console.log(personQueue.tailcounter());
console.log(personQueue.headCounter());
