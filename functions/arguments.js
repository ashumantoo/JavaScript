//Multiple arguments

let add = function (a, b, c) {
    return a + b + c;
};

let result = add(10, 5, 20);
console.log(result);


//Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {

    //Normal string
    // return "Name: " + name + ' - Score: ' + score;

    //Template String
    return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

let getTip = function (total,tipPercent = 0.2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;

    //Template string
    return `A ${percent}% tip on ${total} would be ${tip}`;
};

let tip = getTip(100 , 0.25);
console.log(tip);