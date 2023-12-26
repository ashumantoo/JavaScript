/**************************************************************************************************************
 *                              Stack Implementation using Closure JS
 * --- Closure is a function which can access and modify the variable which are outside of it's own scope, even
 *     after the function has returned.
 * 
 * --- By using closure we can defined/create private variable/function which can only be accessilbe inside the
 *     function scope.
 * 
 * --- Here in the below example - Private variable:
 *                                   items
 * 
 *                                 Private function/method
 *                                   add(),remove()
 * 
 *                                 Public function/method
 *                                   insert(),delete(),size(),isEmpty(),peek(),clear()
 *                                 
 */

const closureStack = () => {
  const items = [];

  const add = (element) => {
    items.push(element)
  }

  const remove = () => {
    items.pop(items[items.length - 1]);
  }

  const size = () => {
    return items.length;
  }

  const getItems = () => {
    return items;
  }

  const isEmpty = () => {
    return items.length === 0
  }

  const peek = () => {
    if (!isEmpty()) {
      return items[items.length - 1];
    } else {
      return "Stack is empty"
    }
  }

  const clear = () => {
    items = [];
  }

  return {
    insert: (element) => {
      add(element);
    },
    delete: () => {
      remove();
    },
    size,
    getItems,
    isEmpty,
    peek,
    clear
  }
}

const newStack = closureStack();

//newStack.add(10); //add is not accessible because that is a private function
//newStack.add(20);

newStack.insert(10);
newStack.insert(20);

console.log(newStack.getItems());
console.log(newStack.isEmpty())
console.log(newStack.peek());

//console.log(newStack.remove()); //remove is also not accessible because it is a private function
newStack.delete();
console.log(newStack.getItems());
