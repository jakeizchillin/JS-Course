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
 */

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