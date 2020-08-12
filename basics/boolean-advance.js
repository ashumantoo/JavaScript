let isAccountLocked = false;
let userRole = 'admin';

// if (isAccountLocked) {
//     console.log('Account is Locked');
// } else {
//     console.log('Welcome to your Account');
// }

if (isAccountLocked) {
    console.log('Account is Locked');
} else if (userRole === 'admin') {
    console.log('Welcome Admin');
} else {
    console.log('welcome');
}

let temp = 45;

if (temp > 30) {
    console.log('It is hot outside');
} else if (temp < 30) {
    console.log('It is freezing outside');
} else {
    console.log('Go for it, It is pretty nice');
}