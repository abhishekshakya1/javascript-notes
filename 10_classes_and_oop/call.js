function SetUsername(username){
    // complex DB calls (as a comment)
    this.username = username;  // Sets the `username` property on the object
    console.log("called");     // Logs "called" to the console when executed
}


function createUser(username, email, password){
    SetUsername.call(this, username);  // Calls SetUsername with the context of `this`

    this.email = email;       // Sets the `email` property on the object
    this.password = password; // Sets the `password` property on the object
}


const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
