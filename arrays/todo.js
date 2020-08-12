const todos = ['Wake up', 'Get fresh', 'Make Breakfast', 'Go to Office', 'Finish the work'];

console.log(todos.splice(2, 1));
console.log('first---->', todos);

todos.push('first new todo');
console.log('second ----->', todos);

console.log(todos.shift());
console.log('three ----->', todos);

let length = todos.length;

console.log(`You have ${length} todos`);
console.log(todos[todos.length - 1], todos[todos.length - 2]);

todos.forEach(function (item, index) {
    console.log(index, item);
});