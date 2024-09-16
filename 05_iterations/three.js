// for of

// ["", "", ""]
// [{}, {}, {}]

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
    // console.log(num);
    
}

const greetings = "Hello Abhishek!"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    }

    if (greet == " ") {
        break
    }
    // console.log("Each char is: ", greet);
    
}


// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("fr", "France")
map.set("IN", "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

/*
   duplicate values not allowed known for unique values
   and it remembers the order of entries
*/

const myObject = {
    game1: "NFS",
    game2: "Spidy"
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}

// forof  is not working for Object => TypeError: myObject is not iterable

