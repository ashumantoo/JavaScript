let name = ' Ashutosh Mantoo   ';

//Length property
console.log(name.length);

//Convert to upper case
let uppercase = name.toUpperCase();
console.log(uppercase);

let lowercase = name.toLowerCase();
console.log(lowercase);

//Includes method
let password = 'abc123password098';
console.log(password.includes('password'));

//Trim method
console.log(name.trim());

let isValidPassword = function (password) {
    // if (password.length <= 8 || password.includes('password')) {
    //     return false;
    // }else{
    //     return true;
    // }

    return password.length > 8 && !password.includes('password');
};

let validPassword = isValidPassword('kjkl');
console.log(validPassword);