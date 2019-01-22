/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var 3years = 3;
=======
/***************
* Variable mutation and type coercion


var firstName = 'John';
var age = 28;
// coercion - convert number to string
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// mutation change value of variable
age = 'twenty eight'; // var not needed because declared above
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// grab name from prompt
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/*******************
 * Basic opperators

var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math opperators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical opperators
var johnOlder = ageJohn >  ageMark;
console.log(johnOlder);

// typeof opperator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof x);
var x;

/*************************
 * Operator precedence 
 

 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2; // x = x * 2 
console.log(x);
x += 10; // x = x + 10
console.log(x);
x++; // x = x + 1;  x += 1;
console.log(x);

*/

/****************************
 *  Coding Challenge 1 


 var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI;

 markMass = 60;
 markHeight = 2;
 johnMass = 55;
 johnHeight = 1.8;

 markBMI = markMass / markHeight**2

 johnBMI = johnMass / johnHeight**2

var markGreater = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher thank John\'s? ' + markGreater);

 */

 /******************************
  *  If / else statements
 

  var firstName = 'John';
  var civilStatus = 'single';

  if (civilStatus === 'married') {
    console.log(firstName +  ' is married!');
  } else {
    console.log(firstName + ' will hopefully marry soon :)');
  }

  var isMarried = true;
  if (isMarried) {
    console.log(firstName +  ' is married!');
  } else {
    console.log(firstName + ' will hopefully marry soon :)');
  }

  var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI;

  markMass = 60;
  markHeight = 2;
  johnMass = 55;
  johnHeight = 1.8;
 
  markBMI = markMass / markHeight**2
 
  johnBMI = johnMass / johnHeight**2
 
 // var markGreater = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher thank John\'s? ' + markGreater);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is greater than John\'s.');
} else {
    console.log('John\'s BMI is greater than Mark\'s.');
}

*/

/***************
* Boolean logic

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}


/**********
 * The ternary operator


 var firstName = 'John';
 var age = 19;

//condition ? if block : else block
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if else statement of above
/* if (age > = 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement 
var job = 'cop';
switch (job) {
    case 'teacher' :
    case 'instructor' :
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver' :
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/**************************
 *  Truthy and Falsy valudes and equality operators
 

 // falsy values: undefined, null, 0, '', NaN - false we evaluated in if/else statement
 // truthy : not falsy values

 var height;

 height = 23;

 if (height || height === 0) {
     console.log('Variable is defined');
 } else {
     console.log('The variable has not been defined');
 }

// Equality operators
if (height ==='23') {
    console.log('The === operator does type coercion!');
}

*/

/*****************************
 * Coding challenge 2 

var john1, john2, john3, mike1, mike2, mike3, mary1, mary2, mary3, johnAvg, mikeAvg, maryAvg;
john1 = 89;
john2 = 120;
john3 = 100;
mike1 = 116;
mike2 = 94;
mike3 = 123;
mary1 = 97;
mary2 = 134;
mary3 = 105;


johnAvg = (john1 + john2 + john3) / 3;
mikeAvg = (mike1 + mike2 + mike3) / 3;
maryAvg = (mary1 + mary2 + mary3) / 3;

if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('Mike\'s team has the highest average score');
} else if (johnAvg > mikeAvg && johnAvg > maryAvg) { 
    console.log('John\'s team has the highest average score');
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log('Mary\'s team has the highest average score');
} else {
    console.log('Equal average scores.')
}


/*****************
 * Functions


 function calculateAge(birthYear) {
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.' );
    } else {
        console.log(firstName + ' is already retired.');
    }
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1948, 'Mike');
 yearsUntilRetirement(1969, 'Jane');

  */

/****************************
 *  Function Statements and Expressions
 * 
 

 // function declaration
 // function whatDoYouDo(job, firstName) {}

// function expression
  var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
  }

  console.log(whatDoYouDo('teacher', 'John'));
  console.log(whatDoYouDo('designer', 'Jane'));
  console.log(whatDoYouDo('retired', 'Mark'));

  */

/***************************
* Arrays 


// Initialize Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate Array
names[1] = 'Ben';
//names[5] = 'Mary';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

// console.log(john.indexOf(1990));
console.log(john.indexOf(23)); // returns -1 since it's not there, good test

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John IS a designer';
console.log(isDesigner);
*/

/****************************
 * Coding Challenge 3 

var bills = [124, 48, 268];

 // Tip function

 function tipCalc(bill) {
     if (bill < 50) {
        return bill * .20;
     } else if (bill >= 50 && bill <= 200) {
        return bill * .15;
     } else {
        return bill * .1;
     }
 }

 var tips = [];

 var total = [];

 tips.push(tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2]));
 console.log(tips);

 total.push((tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2]));
 console.log(total);

*/

/************************
 *  Objects and properties
 

 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false
 }; //object literal

 console.log(john);
 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

 //mutate object

 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

 // create object - new object syntax

 var jane = new Object();
 jane.name = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);
*/










