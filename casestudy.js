const readline = require('readline');

const r1 = readline.createInterface({

input: process.stdin,

output: process.stdout
});

//declare array 

var day1 = [];
var day2 = [];
var day3 = [];
var day4 = [];
var day5 = [];
var day6 = [];
var day7 = [];


//declare day

const monday = ['2020-6-8', '10:00', '13:00', 0.5]
const tuesday = ['2020-6-9', '11:00', '19:00', 0.5]
const wednesday = ['2020-6-10', '22:00', '24:00', 1.5]
const thursday = ['2020-6-11', '13:00', '22:00', 0.5]
const friday = ['2020-6-12', '10:00', '22:00', 0.5]
const saturday = ['2020-6-13', '13:00', '24:00', 0.5]
const sunday = ['2020-6-14', '10:00', '22:00', 0.5]

var day = [monday, tuesday, 
    wednesday, thursday, 
    friday, saturday, 
    sunday]

const table = [day1, day2, day3, day4, day5, day6, day7];

//display array

console.table(day);

/* CODING FOR UNDERSTANDING ASSESSING THE ARRAY

//Accessing array day
//First row
console.log(day[0]);

//First row date
console.log(day[0][0]);

//First row start time
console.log(day[0][1]);

//First row end time
console.log(day[0][2]);

//First row rate
console.log(day[0][3]);

//Get value first day start time first digit
console.log(day[0][1][0])

//Get value first day start time second digit
console.log(day[0][1][1])

//Get start time hour part
var startTime = day[0][1][0]*10 + day[0][1][1]*1
console.log(startTime)

var endTime = day[0][2][0]*10 + day[0][2][1]*1
console.log(endTime)

var rate = (endTime - startTime) * 60 * 0.5
console.log(rate)
*/

//function call for calculation of rate everyday and the whole week
calculate();


function calculate(){
    var startTime1 = day[0][1][0]*10 + day[0][1][1]*1
    var endTime1 = day[0][2][0]*10 + day[0][2][1]*1
    var rate1 = (endTime1 - startTime1)* 60 * 0.5;
    console.log(`Rate for 2020-6-8 is RM ${rate1}`);

    var startTime2 = day[1][1][0]*10 + day[1][1][1]*1
    var endTime2 = day[1][2][0]*10 + day[1][2][1]*1
    var rate2 = (endTime2 - startTime2)* 60 * 0.5;
    console.log(`Rate for 2020-6-9 is RM ${rate2}`);

    var startTime3 = day[2][1][0]*10 + day[2][1][1]*1
    var endTime3 = day[2][2][0]*10 + day[2][2][1]*1
    var rate3 = (endTime3 - startTime3)* 60 * 0.5;
    console.log(`Rate for 2020-6-10 is RM ${rate3}`);

    var startTime3 = day[3][1][0]*10 + day[3][1][1]*1
    var endTime3 = day[3][2][0]*10 + day[3][2][1]*1
    var rate4 = (endTime3 - startTime3)* 60 * 0.5;
    console.log(`Rate for 2020-6-11 is RM ${rate4}`);

    var startTime3 = day[4][1][0]*10 + day[4][1][1]*1
    var endTime3 = day[4][2][0]*10 + day[4][2][1]*1
    var rate5 = (endTime3 - startTime3)* 60 * 0.5;
    console.log(`Rate for 2020-6-12 is RM ${rate5}`);

    var startTime3 = day[5][1][0]*10 + day[5][1][1]*1
    var endTime3 = day[5][2][0]*10 + day[5][2][1]*1
    var rate6 = (endTime3 - startTime3)* 60 * 0.5;
    console.log(`Rate for 2020-6-13 is RM ${rate6}`);

    var startTime3 = day[6][1][0]*10 + day[6][1][1]*1
    var endTime3 = day[6][2][0]*10 + day[6][2][1]*1
    var rate7 = (endTime3 - startTime3)* 60 * 0.5;
    console.log(`Rate for 2020-6-14 is RM ${rate7}`);

    var rateweek = rate1 + rate2 + rate3 + rate4 + rate5 + rate6 + rate7;

    console.log(`Total rate for the whole week is RM ${rateweek}`);
}
//date