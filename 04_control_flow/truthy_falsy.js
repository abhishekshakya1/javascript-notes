// const userEmail = "sur@.ai"     // STRING => TRUTHY VALUE
// const userEmail = ""            // EMPTY STRING => FALSY VALUE

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// const userEmail = []               // EMPTY ARRAY => TRUTHY VALUE

// if (userEmail.length === 0) {
//     console.log("Array is empty");   
// }

const userEmail = {}               // EMPTY OBJECT => TRUTHY VALUE

if (Object.keys(userEmail).length === 0) {
    console.log("Object is empty");   
}

/*
  FALSY VALUES => false, 0, -0, BigInt 0n, "", null, undefined, NaN

  TRUTHY VALUES => "0", "false", " ", [], {}, function(){}
 */


  /*
     In browser console
     false == 0   =>   true
     false == ""  =>   true
     0 == ""      =>   true
  */