//---------------------------DOM------------------
//window object
//The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.

//It is a global object with lots of properties & methods.

console.log("Hey");

window.console.log("Hey windows");

//What is DOM ?
//When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
// DOM help to provide Dynamic change or manipulation in web pages.

//---------------------DOM manipulation --------------------
// # Selecting with id
//      document.getElementById("myId")

let head = document.getElementById("head");

console.dir(head);

// # Selecting with class  (It returns HTML Collection)
//    document.getElementsByClassName("myClass")

let R = document.getElementsByClassName("R");
console.dir(R);

// # Selecting with tag
//      document.getElementsByTagName("p")

let tag = document.getElementsByTagName("p");
console.dir(tag);

// Query Selector
// document.querySeIector("myId / myClass / tag")
// returns first element

let firstEleId = document.querySelector("#head")  //BY id
console.dir(firstEleId);

let firstEleClass = document.querySelector(".R") //BY class
console.dir(firstEleClass);

let firstEle = document.querySelector("p")  //By tag
console.dir(firstEle);


// document.querySelectorAll("myld / myClass / tag")
// returns a NodeList
let allEleClass = document.querySelectorAll(".R"); //By class
console.dir(allEleClass); 

let allEle = document.querySelectorAll("p") //By tag
console.dir(allEle);