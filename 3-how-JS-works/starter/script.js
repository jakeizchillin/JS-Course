///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965);


function calculateAge(year) { // stored in variable object before anything 
    console.log(2016 - year); // only works for function declarations
}

// retirement(1990); // does not work, function expression


var retirement  = function(year) {  // function expression
    console.log(65 - (2016 - year));
}

// variables

// console.log(age); this is undefined - doc is scanned first and variables are set to undefined
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}
foo(); // 65 printed
console.log(age); // prints 23 b/c global execution context 

*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example - each function creates a scope
/*
var a = 'Hello!'; // Global scope
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}


///////////////////////////////////////
// Lecture: The this keyword











