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