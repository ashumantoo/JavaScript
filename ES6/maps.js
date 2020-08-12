////////////////////////////
// Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(1, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer:D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);

//Delete the Properties of an map
if (question.has(4)) {
    //question.delete(4);
}

//Clear all the properties of an map
//question.clear();

//iteration on map using foreach
question.forEach((value, key) => {
    console.log(`This is ${key}, and it's set to ${value}`);
});

//iteration on map using for of
for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`Answer ${key} : ${value}`);
    }
}

console.log(question);
