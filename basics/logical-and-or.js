let temp = 55;

//Logical And operator - True if both sides are true. False otherwise;
//Logical Or operator - True if at least one of the side is true. False otherwise;

if (temp >= 60 && temp <= 90) {
    console.log('It is Pretty nice outside');
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside');
} else {
    console.log('Eh, Do What you want');
}


let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Are both vegan, only offer up vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offers up some vegan dishes');
} else {
    console.log('Offers up anythings');
}