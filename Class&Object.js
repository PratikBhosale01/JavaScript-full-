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