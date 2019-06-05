/**
 * Variables and data types
 *
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

// Variable naming rules
var 3years = 3;
*/

/**
 * Variable mutation and type coercion
 

 var firstName = 'John';
 var age = 28;

 // Type coercsion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '.  Is he married? ' + isMarried);

 // Variable mutation
 age = 'tweny eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + job + '.  Is he married? ' + isMarried);

 var lastName = prompt('What is his last name?');
 console.log(firstName + ' ' + lastName);

 */

 /************************************
  * Basic operators


var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

console.log(yearJohn);
console.log(yearMark);

// Math operators
console.log(now + 2);
console.log(now - 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/**
 * Operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge =  now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn  = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 //
console.log(x, y);

x *= 2;
console.log(x);
x += 10;
console.log(x);
x-- ;
console.log(x);

*/

/**
 * Coding challenge 1
 

var markHeight, markWeight, johnHeight, johnWeight, markBMI, johnBMI, markGreater;

markHeight = 2.0;
markWeight = 55;
johnHeight = 1.8;
johnWeight = 54;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

markGreater = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log('Is Mark\'s BMI highter than John\'s? ' + markGreater);

/*
 * 14 If/else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon.')
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon.')
}

var massMark = 78; // kg
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}

/**


var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/