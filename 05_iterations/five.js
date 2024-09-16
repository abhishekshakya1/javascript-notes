// for Each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// })


// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    // console.log(item);
    console.log(item.languageName);
})