// var c = 300

// let a = 10
// const b = 20
// var c = 30

let a = 300
if(true) {
    let a = 10
    const b = 20
    //       c = 30
    // var c = 30
    // console.log("INNER: ", a);
}

console.log(a);
console.log(b);
console.log(c);

/*
  Global scope is different in both =>
    inspect window or node environment
*/



// nested scope

function one() {
    const username = "Abhishek"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()   
}

// one()

if(true) {
    const username = "Abhishek"
    if(username === "Abhishek") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1
}


addTwo(5)
const addTwo = function addTwo(num) {
    return num + 2
}

