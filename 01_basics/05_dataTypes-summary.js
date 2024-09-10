// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Abhishek"
const score = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 343623274895905975863n
console.log(bigNumber);
console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Virat", "Kohli", "Ronaldo"];

let student = {
    name: "Abhishek",
    age: 18,
    class: "BCA"
};

const myFunction = function() {
    console.log("Hello World"); 
}

myFunction();
console.log(heroes, student);
console.log(typeof (heroes), typeof (student), typeof (myFunction));


// https://262.ecma-international.org/5.1/#sec-11.4.3




// ***************** Memory **********************

// Stack (Primitive),  Heap (Non-Primitive)

let myYoutubeName = "AbhishekShakya"

let anotherName = myYoutubeName
anotherName = "Suraj"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

