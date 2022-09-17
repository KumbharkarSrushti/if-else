var a = require('readline-sync');
var day = a.question("enter day");
var aname ; 
switch (day) {
    case 1:
        aname = 'Sunday';
        break;
    case 2:
        aname = 'Monday';
        break;
    case 3:
        aname = 'Tuesday';
        break;
    case 4:
        aname = 'Wednesday';
        break;
    case 5:
        aname = 'Thursday';
        break;
    case 6:
        aname = 'Friday';
        break;
    case 7:
        aname = 'Saturday';
        break;
    default:
        aname = 'Invalid day';
}
console.log(aname); // Tuesday

