const notes = ['Note 1', 'Note 2', 'Note 3'];

//pop -> remove and push-> add single element from the end of the array
console.log(notes.pop());
notes.push('My new note');
console.log('first----->', notes);

//shift-> remove and unshift -> add single element from the start of the array
console.log(notes.shift());
notes.unshift('My first note');
console.log('Second---->', notes);

//splice-> remove element from the specified position and the no of element to be deleted
notes.splice(1, 1, 'This is the new second item');

notes[2] = 'This is now the new note 3';


console.log(notes.length);
console.log(notes[notes.length - 1]);
console.log('Third---->', notes);

notes.forEach(function (item, index) {
    console.log(index);
    console.log(item);
});

for (let count = 2; count >= 0; count--) {
    console.log(count);
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count]);
}

for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    console.log(element);
}