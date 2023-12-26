//Operator And COnditoionalStatement

//----------------------------------------------------------------
//operators:-
//Used to perform some operation on data
// + -  / *
// Modulus    "%"
// Exponentiation "**"
// Increment "++"
// Decrement "--"


let A = 7;
let B = 3;
let C = A - B;
let D = A + B;
let E = A * B;
let F = A / B;
let G = A % B;
let H = A ** B; //A^B 



console.log("A =", A, "& B =",B);
console.log("A + B = ", D ); 
console.log("A - B = ", C );
console.log("A * B = ", E );
console.log("A / B = ", F );
console.log("A % B = ", G );
console.log("A** B = ", H );
console.log("A++ =", A++ );   //post increment
console.log("B-- =", B-- );  // post decrement
console.log("++A =", ++A );  // pre increment
console.log("--B =", --B );  //pre decrement


//==========================================================
//aasignment operators

// = ,+= ,-=, *=, %= , **=, /=,

A += 1; // A = A + 1
console.log(A); 

A -= 1; // A = A - 1
console.log(A);

A *= 2; // A = A * 2
console.log(A);

A /= 2; // A = A / 2
console.log(A);

A %= 2; // A = A % 2
console.log(A);

A **= 2; // A = A ** 2
console.log(A);

//================= comparison operator =======================

//Equal to == 
//Not equal to !=
//Equal to & type === 
//Not equal to & type !== 
console.log("A=",A ,"B=", B);
console.log(A == B , "A == B");
console.log(A != B,"A != B");
let A1 ="5";
let B1 = 5 ;
console.log(A1 == B1);
console.log(A1 === B1); //check for type also
console.log(A1 !== B1); //check for type

// some more operators < ,>, <= and >= .

//================= Logical Operators =================

//Logical AND  &&
// Logical OR  ||
// Logical NOT  !

//Logical Operators
//&& both true then true else false
let a = 6
let b = 5
let condl = a > b; // true
let cond2 = a === 6; // true
console. log("condl && cond2 = ",condl && cond2) ;

// || atleast one true then true else false or both false then false else true
let cond3 = a == b; 
let cond4 = a === 5;
console. log("cond3 || cond4 = ",cond3 || cond4) ;

let cond5 = a ===6;
console. log("cond3 || cond5 = ",cond3 || cond5) ;

