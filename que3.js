let readlineSync = require("readline-sync"); 
var num=readlineSync.questionInt("enter the number : ")
if (num>=5 && num<18) {
    console.log("go to school")
}
if (num>=18){
    console.log("vote in election")
}
if (num>=21){
    console.log("drive a car")
}
if (num>=24){
    console.log("marry")
}
if (num>=25){
    console.log("legally drink")
}
