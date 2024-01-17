// Sync in jS

//Synchronous
// Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.


//Asynchronous
// Due to synchronous programming, sometimes imp instructions get
// blocked due to some previous instructions, which causes a delay in the U l.
// Asynchronous code execution allows to execute next instructions
// immediately and doesn't block the flow.

function hello( ){
    console.log("hello");
}


setTimeout(hello, 5000);
console.log("4232");


//callback
// A callback is a function passed as an argument to another function.

function sum (a, b) {
console.log(a+b);

}


function calculator(a , b , sumCallback) {
  sumCallback(a , b);

}


calculator( 1 , 2 ,sum); // callback function pass with only name without perenthus



// Callback Hell
// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)
// This style of programming becomes difficult to understand & manage.

function getData(dataId,getNextData  ){
   setTimeout(()=>{
    console.log("data", dataId);
    if(getNextData){
    getNextData();
  }
   },2000);
}
// callback Hell 
getData(1,  ()=>{
  getData(2, ()=>{
    getData(3, ()=>{
      getData(4);
    });
  });
});


//Promises
//Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.
// promise state are pending , fulfilled [resolve], rejected
//*resolve & reject are callbacks provided by JS