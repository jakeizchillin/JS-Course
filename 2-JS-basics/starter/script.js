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

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

*/

/**
 *  15 Boolean
 * 
 

 var firstName = 'John';
 var age = 20;

 if (age < 13) {
   console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
 } else {
   console.log(firstName + ' is a man.');
 }

 *  16 Ternary operator


 var firstName = 'John';
 var age = 22;
// Ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);

 /**
 if (age >= 18) {
   var drink = 'beer';
 } else {
   var drink = 'juice';
 }
 */

 // Switch statement
/** 
 var job = 'cop';
 switch (job) {
   case 'teacher' :
      console.log(firstName + ' teaches kids how to code.');
      break;
    case 'driver' :
      console.log(firstName + ' drives and uber in Lisbon.');
      break;
    case 'designer' :
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
      console.log(firstName + ' is a teenager');
      break;
    case age >= 20 && age < 30:
      console.log(firstName + ' is a young man');
      break;
    default:
      console.log(firstName + ' is a man');
  }
  */

  /***
   * 17 Truthy and false values and equality
   * 
   

   // falsy is undefined, null, 0, '', NaN
   // truthy anything NOT falsy

   var height;

   height = 0;

   if (height || height === 0) {
     console.log('Variable is defined.');
   } else {
     console.log('Variable is not defined');
   }
// Equality oerators
if (height == '23') {
  console.log('The == operator does type coercion!');
}
*/

/**
 * Coding Challenge 2

 var j1, j2, j3, m1, m2, m3, my1, my2, my3;
 j1 = 89;
 j2 = 120;
 j3 = 150;
 m1 = 100;
 m2 = 94;
 m3 = 123;
 my1 = 120;
 my2 = 134;
 my3 = 140;

 var jAverage = (j1 + j2 + j3)/3;
 var mAverage = (m1 + m2 + m3)/3;
 var myAverage = (my1 + my2 + my3)/3;

 if (jAverage > mAverage && jAverage > myAverage) {
    console.log('John\'s team has the higher average score with ' + jAverage);
 } else if (mAverage > jAverage && mAverage > myAverage) {
    console.log('Mike\'s team has the higher average score with ' + mAverage);
 } else if (myAverage > jAverage && myAverage > mAverage) {
    console.log('Mary\'s team has the higher average score with ' + myAverage);
 } else {
    console.log('John, Mary, and Mike\'s team have the same average scores with ' + jAverage);
 }

 /********************
  *  Functions
  

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
      console.log(firstName + ' retires in ' +  retirement + ' years.');
    } else {
      console.log(firstName + ' is already retired.');
    }
  }

  yearsUntilRetirement(1990, 'John');
  yearsUntilRetirement(1948, 'Mike');
  yearsUntilRetirement(1969, 'Jane');

/**
 * Function statements and expressions
 * 
 

 // Function declaration
// function whatDoYouDo(job, firstName) {}

 // Function expressions
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

=======
/***
 *  Function statements and expressions
 

 // Function declaration
 // function whatDoYouDo(job, firstName) {}

 // Function expression
 var whatDoYouDo = function(job, firstName) {
   switch(job) {
     case 'teacher':
       return firstName + ' teaches kids how to code';
     case 'driver':
        return firstName + ' drives an uber in Lisbon.';
     case 'designer':
        return firstName + ' designs beautiful websites.';
     default:
        return firstName + ' does something else.';
   }
 }

 console.log(whatDoYouDo('fuckall', 'John'));

/**
 * Arrays
 

 // initialize array
 var names = ['john', 'mark', 'jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[0]);
 console.log(names);
 console.log(names.length);

 // mutate array
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

 // different data types
var john = ['john', 'smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();


console.log(john);

console.log(john.indexOf(false));

var isDesigner = john.indexOf('teacher') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);

/******
 * Coding challenge 3
 * 
 

 var bills = [124, 48, 268];

 function tipCalculator (bill) {
   if (bill < 50) {
     return bill * .2;
   } else if (bill >= 50 && bill <= 200) {
     return bill * .15;
   } else {
     return bill * .1;
   }
 }

 // console.log(tipCalculator(10));

 var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])]
 console.log(tips);
 var total = [(tipCalculator(bills[0]) + bills[0]), (tipCalculator(bills[1]) + bills[1]), (tipCalculator(bills[2]) + bills[2])]
 console.log(total);

*/

/**
 * Objects and Properties
 

 // Object literal
 var john = {
   firstName: 'John',
   lastName: 'Smith',
   birthYear: '1990',
   family: ['Jane', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMarried: false
 };

 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

 // new Object syntax
 var jane = new Object();
 jane.name = 'Jane';
 jane.birthYear = '1969';
 jane['lastName'] = 'Smith';
 console.log(jane);

 */

 /*
 * Objects and methods
 

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear) {
    this.age = 2018 - this.birthYear
  }
};  

john.calcAge();
console.log(john);



/**
 * Coding challenge 4 


 var john = {
   fullName: 'John Smith',
   mass: 100,
   height: 2,
   calcBMI: function() {
     this.BMI = this.mass / (this.height * this.height)
     return this.BMI
   }
 };

 john.calcBMI();
console.log(john);

var mark = {
  fullName: 'Mark Anthony',
  mass: 110,
  height: 2,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI
  }
};

mark.calcBMI();
console.log(mark.BMI);
// if (john.calcBMI() > mark.calcBMI())  - can remove 509 and 496
if (john.BMI > mark.BMI) {
  console.log(john.fullName + ' has a greater BMI at ' + john.BMI + '.');
} else if (john.BMI < mark.BMI) {
  console.log(mark.fullName + ' has a greater BMI at ' + mark.BMI + '.');
} else {
  console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI at ' + mark.BMI + '.');
}
*/

/***
 * Loops and iteration
 * 
 

 for (var i = 1; i <= 20; i += 2) {
   console.log(i);
 }

 var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

 for (var i = 0; i < john.length; i++) {
   console.log(john[i]);
 }

var i = 0;
while(i < john.length) {
   console.log(john[i]);
  i++;
}
*/

// continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break
  console.log(john[i]);
}

// Loop backwards
for (var i = john.length - 1; i >= 0; i--) {
  //if (typeof john[i] !== 'string') continue
  console.log(john[i]);
}



