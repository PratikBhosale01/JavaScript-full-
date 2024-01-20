// async function always returns a promise.
// async function myFunc( ) { .... }
// await pauses the execution of its surrounding async function until the promise is settled.

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}
console.log("hello");


async function weather(){
 await api();
 await api();
}

weather();

////////////////////\


function getData(dataId){
    return new Promise ((resolve, reject)  =>{
     setTimeout(()=>{
        console.log("dataId", dataId);
        resolve("success");
    }, 2000);
    });
}

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
// }

// getAllData();

// : Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined,


(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
})();

//we can use only once