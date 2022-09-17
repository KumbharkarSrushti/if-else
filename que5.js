let readlineSync = require("readline-sync"); 
var letter=readlineSync.question("enter the number : ")
if (letter>="A" && letter<="Z"){
    console.log(letter,"upper case letter")
}    
else {
    console.log(letter,"lower case letter")
}
