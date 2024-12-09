/**************************************************************************
 *                - HIGHER ORDER FUNCTION -
 * --> A function that returns a function is called Higher-Order function.
 * 
 */

function interviewQuestion(job) {
    if (job === 'teacher') {
        return function (name) {
            console.log(name + ', What subject do you teach?');
        };
    } else if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    } else {
        return function (name) {
            console.log('Hello ' + name + ', What do you do?');
        };
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mark');
designerQuestion('Jane');
designerQuestion('bob');

//using double parentheses ()() to invoke the returned function as well
interviewQuestion('teacher')('Mark');
