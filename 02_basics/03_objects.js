// singleton
// Object.create



// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Abhishek",
    "full_name": "Abhishek Kumar",
    "last name": "Shakya",
    [mySym]: "mykey1",
    age: 19,
    location: "Faridabad",
    email: "abhi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
// console.log(JsUser[email]);
// console.log(JsUser["email"]);
console.log(JsUser.full_name);
console.log(JsUser["full_name"]);

// console.log(JsUser.last name);
console.log(JsUser["last name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "suraj@12.com"
console.log(JsUser["email"]);



