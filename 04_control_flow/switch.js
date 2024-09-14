// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 2

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}

/* 
   ek baar jaha pe bhi case match ho jata hai
    uske baad ka sara code execue krta hai ye
    except default

    And we use break to stop control flow
     and get our desired output which is 
     obviously the matched case
*/
