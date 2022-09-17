// var score = 20;

// switch(score){
//     case 10:
//         console.log("Score value is 10");
//         break;
//     case 20:
//         console.log("Score value is 20");
//         break;
//     default:
//         console.log("Score value is neither 10 or 20");
// }

let readlineSync= require("readline-sync");
let score=readlineSync.question("enter the choce");
switch(score){
    case 10:
        console.log("Score value is 10");
        break;
    case 20:
        console.log("Score value is 20");
        break;
    default:
        console.log("Score value is neither 10 or 20");
}