// classes & Object 

// A javaScript object is an entity having state and behavior (properties and method).

const students ={
  fullname:"Vaibhav Chikte",
  marks:86.9,
  printMarks() {
   console.log("marks =" , this.marks);
},
 
}

students.printMarks();

//JS objects have a special property called prototype.
//We can set prototype using _ _ proto_ _

//*If object & prototype have same method, object's method will be used.

const employee = {
    calTax(){
        console.log("Tax rate is 10%");
    },
};

const karan = {
    salary: 10000 ,

};

// custom prototype 

karan.__proto__ = employee;

karan.calTax();

//====================================
//classes
//Class is a program-code template for creating objects.
//Those objects will have some state (variables) & some behaviour (functions) inside it.

//constructor in class 

//automatically invoked by new keyword

//used to initialize object

class Toyata{

    constructor(brand){
        console.log("creating object ");
        this.brand = brand;
    }
    start(){
        console.log("Starting");

    }

    stop() {    
        console.log("Stopping");
    }

    // setBrand (brand){
    //     this.brand = brand;
    // }
}

let fortuner = new Toyata("fortuner");

 console.log(fortuner);
// fortuner.setBrand(fortuner);
let lexus = new Toyata();   // if you don't pass any value it will be undefined
console.log(lexus);

lexus.brand = "lexus";
console.log(lexus);

// inheritance in js 
//inheritance is passing down properties & methods from parent class to child class.
//*If Child & Parent have same method, child's method will be used. [Method Overriding]

// class Person{
//     eat (){
//         console.log("eat");

//     }

//     sleep(){
//         console.log("sleep"); 

//     }
// }


// class Engineer extends Person{
//     work (){
//         console.log("slove problem , build something ");

//     }
// }

// let SuyogObj = new Engineer();
// console.log("suyog build something");
// console.log(SuyogObj.eat());


// super Keyword 
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
class Person{

    constructor(){
        console.log("Entre parent Contrusctor");
        this.species = "Homo sapiens"
    }
    eat (){
        console.log("eat");

    }

}


class Engineer extends Person{
    constructor(branch) {
        console.log("Entre child Contrusctor");
        super(); // to invoke parent constructor
        this.branch = branch;
    }
    
    
    work (){
        console.log("slove problem , build something ");

    }
}

let SuyogObj = new Engineer("civil");
