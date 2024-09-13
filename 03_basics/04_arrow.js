const user = {
    username: "Abhishek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);  
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);
/*
    this gives window object in inspect browser
     (browser ke andar jo global object hai wo hai window object)
     but this gives empty object {} in node environment
 
 */



// function chai() {
//     let username = "Suraj"
//     console.log(this.username);
//     console.log(this);
// }

// chai()

/*
      this context does not works in functions 
      it only works in objects
*/


// const chai = function() {
//     let username = "Suraj"
//     console.log(this.username);
// }

// chai()


// const chai = () => {
//     let username = "Abhishek"
//     // console.log(this.username);
//     console.log(this);
// }

// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2                   // EXPLICIT return
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )   // IMPLICIT return

const addTwo = (num1, num2) => ({username: "aman"})

// addTwo(3, 5)
// console.log(addTwo(3, 5));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function() {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())

