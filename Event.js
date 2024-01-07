//===================================
//=============Events=============


// The change in the state of an object is known as an Event
// Events are fired to notify code of "interesting changes" that may affect code execution.


// Mouse events (click, double click etc.)
// Keyboard events (keypress, keyup, keydown)
// Form events (submit etc.)
// Print event & many more


//Event handling in js 

// node.event= ( ) => {
//  //handle here
// }

let btn = document.querySelector("button");
btn.style.backgroundColor ="blue";
// btn.onclick = () =>{
//     alert("works");
//     let div = document.querySelector('div');
//     div.style.backgroundColor = 'red'; 
// }

//=========== event object 

// It is a sepcial object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.


// btn.onclick = (evt) =>{
//   console.log(evt);
//   console.log(evt.target);
//   console.log(evt.type);    
// }


//=============== event listeners

btn.addEventListener("click",() =>{     //add event listener
    console.log("onclick 1");
    
});

btn.addEventListener("click",() =>{    //add event listener
    console.log("onclick 2");
    
});

const onclick3 = () =>{     
    console.log("onclick 3");
    
}; 

btn.addEventListener("click",onclick3);  //add event listener

btn.addEventListener("click",() =>{          //add event listener
    console.log("onclick 4"); 
    
});



btn.removeEventListener("click",onclick3);  // remove event listener

