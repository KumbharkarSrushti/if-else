Balane="20000"
console.log(Balane,"balance in a acoount")
console.log("*************welcome**************")
console.log("***************ATM*****************")
const readlineSync = require("readline-sync")
var ATM_CARD = readlineSync.question("ENTER THE ATM CARD =>")
if (ATM_CARD=="insert the atm card"){
    var language=readlineSync.question("Enter the languages =>")
    if (language=="hindi" || "marathi" || "English"){
        var account=readlineSync.question("Enter your account =>")
        if (account=="saving" || "current"){
            var pin_code=readlineSync.question("Enter your code =>")
            if (pin_code>=1 || pin_code<=9){
                var amount_cash = readlineSync.questionInt("Enter the amount cash  =>")
                if (amount_cash > 0 && amount_cash < 20000) {
                    console.log(amount_cash, "withdraw money")
                    console.log(20000 - amount_cash, "remaining money in ATM")
                } else {
                    console.log(amount_cash, "This amount is not your account")
                }
            } else {
                console.log("This is not your pin code")
            }
        } else {
            console.log("This is not proper account name")
        }
    } else {
        console.log("Incorrect launguage")
    }
} else {
    console.log("This is not atm card")
}

