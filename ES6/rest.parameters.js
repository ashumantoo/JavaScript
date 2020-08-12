///////////////////////////////////////////////////////
// Rest Parameters

//ES5
function isFullAge5() {
    // console.log(arguments); // Print as an object of all the passed arguments

    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (element) {
        console.log((2019 - element) >= 18);

    });
}

//isFullAge5(2005, 1990, 2008);
//isFullAge5(2010,1990,2014,2000,1998);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(element => console.log((2019 - element) >= 18));
    years.forEach(element => console.log((2019 - element) >= limit));
}

isFullAge6(2005, 1990, 2008);
isFullAge6(2010, 1990, 2014, 2000, 1998);


