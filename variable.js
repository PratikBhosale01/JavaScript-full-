//**  JS is a programming language. We use it to give instructions to the computer.
//**  Js is dynamic programming language/dynamically typed language

//Variables are containers for data




//***defined variables

fullName = "Tony Stark";
age = 24;
price = 99.99 ;
radius = 14;
a = null;
Y = undefined;
isFottow = true;


// console.log is used to print 
 console.log(age);



 //***rules

// •  Variable names are case sensitive; "a" & "A" is different.
fullname ="rahul p";
fullName= "Pritam p";
console. log ( fullname) ;
console. log (fullName) ;

// • Only letters, digits, underscore(_ ) and $ is allowed. (not even space)
// • Only a letter, underscore( _ ) or $ should be 1st character.

futtName = "tony stark";
_fullName = "tony stark";
$fullName ="tony stark";

console. log (fullname);
// • Reserved words cannot be variable names.


//  ***let const and var 

//1 - var : Variable can be re-declared & updated. A global scope variable. (used upto 2015 before  ES6)

 var age = 10; 

 var age = 20; //redeclaration allowed

 age = 30 ; // updation allowed

//2 - let: Variable cannot be re-declared but can be updated. A block scope variable.

let myAge = 10; 

 //let myAge = 20; //redeclaration not allowed

 myAge = 30 ; // updation allowed


//3 - const : Variable cannot be re-declared or updated. A block scope variable.

const newAge = 10; 

 //const newAge = 20; //redeclaration not allowed

// newAge = 30 ; // updation not allowed

// const obj - key value we can change 


// *** Data types ****

//1 Number 
let num = 42;
console.log(typeof num); // Output: "number"


//String
let str = "Hello, World!";
console.log(typeof str); // Output: "string"

//boolean
let isTrue = true;
console.log(typeof isTrue); // Output: "boolean"

//undefined
let undefinedVar;
console.log(typeof undefinedVar); // Output: "undefined"

//Null
let nullVar = null;
console.log(typeof nullVar); // Output: "object" (Note: typeof null is a historical bug in JavaScript)



//symbol
let sym = Symbol("unique");
console.log(typeof sym); // Output: "symbol"



//object

const student={
fullName: "Rahul Kumar" ,
age: 20,
cgpa:8.2,
isPass: true,};

student["age"] = student["age"] + 1;
console.log(student ["age"] ) ;