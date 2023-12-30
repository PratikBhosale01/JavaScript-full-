//Qs. For a given array with marks of students -s [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.


let  students = [85, 97, 44, 37, 76, 60];
let  sum =0;

for (let i = 0; i < students.length; i++){
  
    sum = sum + students[i];


}

let avr = sum / students.length;

console.log(avr);