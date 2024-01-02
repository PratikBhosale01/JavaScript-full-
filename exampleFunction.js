//Qs. For a given array of numbers, print the square of each value using the forEach loop.


let arr = [1, 2, 3, 4, 5];

let calSq =(value) => {
    let squ = value**2;
    console.log(`The squre of  ${value} is ${squ} `);
 }
 arr.forEach( calSq); 