function calculateCartPrice(num1) {
    return num1
}

// console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 400, 500));


function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(299, 400, 500, 7000));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(299, 400, 500, 7000));


const user = {
    username: "Abhishek",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// const user = {
//     username: "Abhishek",
//     prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})


const myNewArray = [200, 400, 500, 6000]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500 ,6000]));

