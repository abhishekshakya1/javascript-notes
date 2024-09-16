// for in

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(key);
//    console.log(myObject[key]);
//    console.log(`${key} is shortcut for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(key);
// console.log(programming[key]);
}


const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("fr", "France")
map.set("IN", "India")

for (const key in map) {
    console.log(key);
}

/*
  Map is not iterable
  Map ke uper iteration nhi kiya ja skta
*/