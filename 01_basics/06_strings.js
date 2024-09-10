const name = "Abhishek"
const repoCount = 50

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);


const gameName = new String("Abhishek-hcl")

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(7));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 4)
console.log(anotherString);


const newstringOne = "   Abhishek    "

console.log(newstringOne);
console.log(newstringOne.trim());


const url = "https://abhishek.com/abhishek%20shakya"
console.log(url);
console.log(url.replace("%20", "_"));

console.log(url.includes("shakya"));
console.log(gameName.split("-"));













