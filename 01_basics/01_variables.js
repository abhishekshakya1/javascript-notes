const accountId = 1445553;
let accountEmail = "abhishek@google.com";
var accountPassword = "12345";
accountCity = "Faridabad";
let accountState;

// accountId = 2  // NOT ALLOWED 

accountEmail = "ab@hi.com";
accountPassword = "32456237";
accountCity = "Noida";

console.log(accountId); 

/*
 Prefer not to use var
 because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
 In js if we left variable after decalaration
 and don't give value to it
 then Js assumed it undefined
*/
