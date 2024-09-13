// console.log("A");
// console.log("B");
// console.log("H");
// console.log("I");
// console.log("S");
// console.log("H");
// console.log("E");
// console.log("K");


function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // console.log("Abhishek");
    // return result
    // console.log("Abhishek");

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "Sam") {
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }

    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just loggedin`
}

// console.log(loginUserMessage("Abhishek"));
// const result1 = loginUserMessage("Abhishek")
// console.log(result1);
// console.log(loginUserMessage(""));
console.log(loginUserMessage());




