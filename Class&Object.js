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