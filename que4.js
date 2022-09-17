let readlineSync = require("readline-sync"); 
var num=readlineSync.questionInt("enter the number : ")
if (num<50){
    if (num%2==0)
        console.log(num,"even number")
    else{
        console.log(num,"odd number ")
    }
}
else if (num>50){
    if (num%2==0)
        console.log(num,"even number ")
    else{
        console.log(num,"odd number")
    }
}
else{
    console.log(num,"equal")
}