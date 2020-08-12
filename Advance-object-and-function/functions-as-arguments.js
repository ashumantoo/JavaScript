/***********************************************************************************************************
 *                         - FIRST CLASS FUNCTION -
 * --> A programming language is said to have First-class-functions in that
 *     language are treated like any other variable. For example , in such a language, function can
 *     be passed as an argument to other functions. can be returned by another function
 *     and can be assigned as a value to a variable.
 * 
 * --> Callback function - Passing function as an argument of another function (callback)
 */

 //========================= Example One ==============================================
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalculate(array, fun) {
    var resultArray = [];
    for (var index = 0; index < array.length; index++) {
        resultArray.push(fun(array[index]));
    }
    return resultArray;
}

function calculateAge(element) {
    return 2019 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}

var ages = arrayCalculate(years, calculateAge);
var fullAge = arrayCalculate(ages, isFullAge);
var heartRate = arrayCalculate(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(heartRate);


//======================================== Example Two ===================================//
const personData = {
    name: "Ashutosh Kumar Mantoo",
    dob: "27-08-1993",
    expences: [2000, 1200, 3000, 4500, 4609, 2345]
}

const calculateExpensces = function (expenseArray, callback) {
    // const totalExpense = 0;
    const resultData = {
        totalExp: 0,
        newArray: []
    }
    for (let index = 0; index < expenseArray.length; index++) {
        const element = expenseArray[index];
        resultData.totalExp = resultData.totalExp + element;
        resultData.newArray.push(callback(element));
    }
    return resultData;
};

function isOverExpense(expense) {
    return expense > 2000 ? true : false;
}

console.log(calculateExpensces(personData.expences, isOverExpense));


