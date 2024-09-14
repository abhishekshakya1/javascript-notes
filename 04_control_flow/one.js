// if

// const temperature = 40

// if( temperature === 40 ) {
//     console.log("Less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 400

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);   
// }

// console.log(`User power: ${power}`); 


// const balance = 1000

// if(balance > 500) console.log("test");

// if(balance > 500) console.log("test"), console.log("test2"),
// console.log("test3"),
// console.log("test4");    // it's not readable don't do this


// const newBalance = 2000

// if (newBalance < 500) {
//     console.log("less than 500");

// } else if (newBalance < 750) {
//     console.log("less than 750");

// } else if (newBalance < 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 2200");
// }


const userLoggedIn = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true
const guestUser = false

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");   
}

if (loggedinFromGoogle || loggedinFromEmail || guestUser ) {
    console.log("User logged in");
}

