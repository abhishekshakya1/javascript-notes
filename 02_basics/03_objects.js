// singleton
// Object.create



// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Abhishek",
    "full_name": "Abhishek Kumar",
    "last name": "Shakya",
    mySym: "mykey1",               // that's wrong 
    [mySym]: "mykey1",            // it should be use like that to use as Symbol
    age: 19,
    location: "Faridabad",
    email: "abhi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser[email]);      // this is not allowed
console.log(JsUser["email"]);

console.log(JsUser.full_name);
console.log(JsUser["full_name"]);

// console.log(JsUser.last name);   // thi is not allowed
console.log(JsUser["last name"]);

console.log(JsUser.mySym);          // this is not the right way to access Symbol
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);           // this is the right way to access Symbol
console.log(typeof JsUser[mySym]);

JsUser.email = "suraj@12.com"
console.log(JsUser["email"]);

Object.freeze(JsUser)
JsUser.email = "aman@123.com"
console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


