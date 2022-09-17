console.log('company shedual')
console.log('morning 8 to evening 6')
const readlineSync = require("readline-sync")
var company_time = readlineSync.questionInt("Enter the time =>")
if (company_time=="8"){
    console.log("i will going to office")
    var company = readlineSync.question("enter the you will go on time yes or no =>")
    if (company=="yes"){
        console.log("i can enter in company")
        console.log("I will do work")
    }
    else if (company=="no"){
        console.log("i cannot enetr in company")
        console.log("i will convinced them for accept in company")
        var convinced = readlineSync.question("enter the i can convinced them yes or no =>")
        if (convinced=="yes"){
            console.log("i will enter the company and i will do my work")
        }
        else if(convinced=="no"){
            console.log("I will come back home")
        }
        else{
            console.log("i will confuse or upset")
        }
    }
}else{
    console.log("today is holiday")
}