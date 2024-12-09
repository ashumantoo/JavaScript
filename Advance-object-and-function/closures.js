/*************************************************
*                           - CLOSURES -
*  --> An inner function has always access to the variables and parameters
of its outer functions, even after the outer function has returned.
*/

function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function (yearOfBirth) {
    var age = new Date().getFullYear() - yearOfBirth;
    console.log((retirementAge - age) + a);
  };
}

var retirementIndia = retirement(65);
retirementIndia(1993);

//calling the returned function using the two parenthesis this will work same as above
retirement(65)(1993);


function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    }else if (job === 'teacher') {
      console.log('what subject do you teach, ' + name + '?');
    }else {
      console.log('Hello '+ name + ', what do you do?');
    }
  };
}

interviewQuestion('teacher')('Mark');
interviewQuestion('designer')('Ashutosh');
