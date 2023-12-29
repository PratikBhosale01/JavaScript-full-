//============loops===================
//Loops are used to execute a piece of code again & again


//for loops
 
for( let i = 0; i < 5; i++ )                       // veriable "i" we cannot use outside loop block because we use let their 
{   
    console.log(" using for loops");
}


// while loops

let i = 0;
while( i < 5 ) {
    console.log(" using while loops");
    i++;
}


// do-while loops (it will excuted at least once   )
let j = 0;
do {
    console.log(" using do-while loops");
    j++;
} while ( j < 5 );


//for-of loops (it will help us to iterate over strings and arrays)

let strVr = "PRATIK"
for ( let va of strVr){
    console.log( va );
}

//for-in loops (it will help us to iterate through objects we get keys )

const product = {
    productName: "Dell inspiron 15 3000",
    rating : 3.9,
    offer : 5,
    price :56000,

}



for( let Key in product ){ 
    console.log(Key ," : " ,product[ Key ] );
}


//===================================================
//===============String==============================

//String is a sequence of characters used to represent text

let str = "VAIBHAV"; //

let lenght = str.length

let char = str[0];

console.log(char,lenght);

//template literals 
//A way to have embedded expressions in strings
//helpful for adding variables to strings

let templ =` my friends name is ${str} .`  // ${...} is placeholder

//String interpolation
//To create strings by doing substitution of placeholders

console.log(templ);


//escape characters
// "\n" = next line
//"\t" =  for tab

// Note length of escape characters count as 1 character 

console.log("happy\nyear ending");
console.log("happy\tyear ending");


// String Methods 
//string are immutable

let nam = "  Amol Gujar  ";
let frd = " is my frd ";
let cap = nam.toUpperCase();
let low = nam.toLowerCase();
let tri = nam.trim(); // remove spaces of starting and ending 
let sli = nam.slice(1,5);
let concat = nam.concat(frd);
let repl = nam.replace( "o","u");
let charAt = nam.charAt(7);


console.log(cap, low, tri);
console.log(sli);
console.log(concat);
console.log(repl);
console.log(charAt);

 
