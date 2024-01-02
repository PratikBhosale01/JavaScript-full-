//=======functions================================
//Block of code that performs a specific task, can be invoked whenever needed

//function defination

function functionName( ) {
    //do some work

}
    function functionName( paraml, param2 ) {
    //do some work 
}


//function call

functionName( );

//example



function intro ( ) {
    console.log("welcome Pratik's Repo");
    console.log("we are learning js language");
};


intro();

//para
function myFunction(msg) {
    //parameter —> input used while defining the function
    console. log (msg) ;
}


myFunction("I love JS"); //arguments use when call function
// function para  =====>  local verables of function ====> blocked scope

function sum(x, y) {
    let s =x + y;
    console.log( " before return");
    return s;
    console.log ("after return");
    
}
    
    let val = sum(3, -4) ;
    console.log (val);

//=============================Arrow functions================
//Compact way write function 

function add(a, b) {
    console.log (a+b);
}


const arrowadd =  // variable which will act as function
(a , b ) => {
    console.log (a+b);
}

arrowadd(1, 2);

// const functionName = ( paraml, param2 ...) => {
//     //do some work
// }


// function become method when u attached it to a object


//forEach Loop in Arrays
// arr.forEach( callBackFunction )
// CallbackFunction : Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.


let arr =[ "Pune" , "mumbai"  , "nagpur" ];
arr.forEach( function printValue( val ,idx,arr) {  // u can pass value of array , index , and  whole array
    console.log(val,idx,arr);
});

//foreach function is higher order function / method
//higher order function are those functions that take function as parameter or return a function 


//====================================
//some more methods of array

//-----------map 
//Creates a new array with the results of some operation. The value its callback returns are used to form new array


//arr.map( callbackFnx( value, index, array ) )

let numArray = [ 1, 2, 3, 4];

numArray.map((value)=>{
    console.log(value);  //using map function TO print the value
});       

let numArrayNew =numArray.map((value)=>{
    return value**2 ;  //using map function TO create new array
});        

console.log(numArrayNew); //

//------------filter 


//Creates a new array of elements that give true for a conditionlfilter.
//Eg: all even elements


let alleven = numArray.filter((value)=>{
    return value % 2 === 0 ;
});

console.log(alleven);

//--------------Reduce 


//Performs some operations & reduces the array to a single value. It returns that single value.

//Eg: add all elements

let addAll = numArray.reduce((pre , curr)=>{
    return pre + curr;
})

console.log(addAll);

//Eg: max number of array

let max = numArray.reduce((pre , curr)=>{
    return pre > curr ? pre : curr;

});

console.log(max);