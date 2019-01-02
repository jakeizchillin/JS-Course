/***************
* Variable mutation and type coercion
*/

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

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);