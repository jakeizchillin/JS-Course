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
*/
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
