// let myName = "abhishek    "
// let myChannnel = "chai     "

// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.abhishek = function(){
    console.log(`abhishek is present an all objects`);
    
}

Array.prototype.heyAbhishek = function(){
    console.log(`Abhishek says hello`);
    
}

// console.log(myHeros);
// console.log(myHeros[0]);

// console.log(heropower);
// console.log(heropower.getSpiderPower());

// heropower.abhishek()
// myHeros.abhishek()

// myHeros.heyAbhishek()
// heropower.heyAbhishek()



// inheritance

const User = {
    username: "chai",
    email: "chai@google.com"
}
const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport  // TASupport inherits from teachingSupport
}

teacher.__proto__ = User  // teacher inherits from User

// console.log(teacher.username);  // Output: "chai"
// console.log(teacher.email);     // Output: "chai@google.com"
// console.log(TASupport.isAvailable);  // Output: false


// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

// console.log(anotherUsername);
// console.log(anotherUsername.length);
// console.log(anotherUsername.trim().length);

// console.log(anotherUsername.trueLength());
anotherUsername.trueLength()
"abhishek".trueLength()
"isetea".trueLength()




