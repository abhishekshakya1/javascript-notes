// array

const myArr = [2, 3, 4, 5, 6]
const myHeros = ["virat", "ronaldo", "kalki"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


// array methods

myArr.push(7)
myArr.push(8)
myArr.push(9, 10)
myArr.pop()

myArr.unshift(0)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(19));
console.log(myArr.indexOf(4));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof myArr);
console.log(newArr);
console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/*
   slice method does not manipulate the original array
   But
   splice method manipulates the original array
*/




