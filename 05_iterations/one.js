// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log("5 is best number"); 
    }
    // console.log(element);
    // console.log(i); 
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Multiplication table for: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop: ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);

    }
    // console.log("------");
    
}


let myArr = ["flash", "batman", "superman", "ironman"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Deteted ${index}`);
//         break
//     }
//     console.log(`Value of i is: ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Deteted ${index}`);
        continue
    }
    console.log(`Value of i is: ${index}`);
    
}



