// Qsl. Get user to input a number using prompt("Enter a number;"). Check if the number is
// a multiple of 5 or not.

// let num = prompt("Enter a number");
// let result =num%5
// if(result ==0){
//     console.log("number is  a multiple of 5");
// }else{
//     console.log("number is a not multiple of 5");
// }


// Qs2. Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-89, B
// 60-69, c
// 50-59, D
// 0-49, F


let score = prompt("Enter a score for students");
// let score = 65;

if ( 100>=score && score>=80 ){
    console.log("Your grade is A ");     
} else if (79>=score && score>=70){
    console.log("Your grade is B ");
} else if (69>=score && score>=60){
    console.log("Your grade is c ");
}else if (59>=score && score>=50){
    console.log("Your grade is D ");
}else{
    console.log("Your grade is F ");
}