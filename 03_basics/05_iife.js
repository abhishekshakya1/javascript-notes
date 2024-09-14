// Immediately Invoked Function Expressions (IIFE)

function chai() {
    console.log(`DB CONNECTED`);
}
chai();

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();                            

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("aman");
 
( function aurcode() {
    console.log(`DB CONNECTED TWO`);
})();

/*
 wo function jo immediately execute ho jaye
 global scope ke pollution se problem hoti hai kai baar
 us global scope ke pollution aur jo bhi waha variables,
  declarations hai usko hatane ke liye humne IIFE ka use kiya

*/