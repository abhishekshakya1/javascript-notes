// const user = {
//     username: "Abhi",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function() {
//         // console.log("Got user details from database");
           // console.log(`Username: ${username}`);
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
        
        
//     }
// }

// // console.log(user);
// console.log(user.getUserDetails());
// console.log(user["signedIn"]);

// console.log(this);



// const promiseOne = new Promise()
// const date = new Date()

/*
    ye jo new keyword hai ye actually mai ek constructor function hai

    ye hume allow krta hai ek hi object literal se multiple instances
    bana sakne ke liye

    ye jo new keyword hai ye naya context banane ke liye kaam aata hai
*/


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }

    return this  // yaha pe return this likhne ki koi jarurat nhi h waise 
                // ye hota hi hai by default hota hi hai 
                // ye implicitly return hota hai
}

const userOne = new User("hitesh", 12, true)
// console.log(userOne.constructor);
console.log(userOne instanceof User);
console.log(userOne instanceof Object);

console.log(userOne);

// const userTwo = new User("Chai", 18, false)
// console.log(JSON.stringify(userOne));
// console.log(userOne.toString());

// console.log(userTwo);

// console.log(userOne.username);
// console.log(userOne.greeting());

// console.log(userOne.isLoggedIn);

