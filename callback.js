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

// function getData(dataId,getNextData  ){
//    setTimeout(()=>{
//     console.log("data", dataId);
//     if(getNextData){
//     getNextData();
//   }
//    },2000);
// }
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
//A JavaScript Promise object can be;

// > Pending : the result is undefined
// >Resolved the result is a value (fulfilled)           
// >Rejected ; the result is an error object
// resolve( result )
// reject( error )

//*Promise has state (pending, fulfilled) & some
// result (result for resolve & error for reject).


function getData(dataId,getNextData  ){
 return new Promise((resolve, reject) =>{
  setTimeout(()=>{
   console.log("data", dataId);
   resolve("success");
   if(getNextData){
   getNextData();
 }
  },2000);
});
}

//.then( )&.catch()

// promise.then( ( res ) => {})
// promise.catch( ( err ) => {})

const getpromise =( )=>{
  return new Promise((resolve, reject) =>{
    console.log("I m promise");
    resolve("success");
  })
}


let promise = getpromise();

promise.then(()=>{
  console.log(" promise fulfilled"); 
});

// promise chain 

function asyncFunc1(){
  return new Promise((resolve, reject) =>{
setTimeout(()=>{
  console.log("data1");
  resolve("success");
},4000);
  });
}


function asyncFunc2(){
  return new Promise((resolve, reject) =>{
setTimeout(()=>{
  console.log("data2");
  resolve("success");
},4000);
  });
}

// console.log(" fetching data1...");
// let data1 = asyncFunc1();
// data1.then((res)=>{
// console.log(res);
// console.log(" fetching data2...");
// let data2 = asyncFunc2();
// data2.then ((res)=>{
//   console.log(res);
// });
// })

//simplest way to above code 
console.log(" fetching data1...");
asyncFunc1().then((res)=>{
console.log(res);
console.log(" fetching data2...");
 asyncFunc2().then ((res)=>{
  console.log(res);
});
})