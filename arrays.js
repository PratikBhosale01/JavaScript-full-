// -----------------------------arrays -----------------------------
//It is nothing but collection of items 


let heros = [ "iron man" , "spider man", "thor", "hulk"];
let marks = [76,67,54,79];

console.log(heros, marks);
console.log(heros.length, marks.length);

//array indices (index)

console.log(heros[0]);

console.log(marks[0]);
marks[0] = 70; // changing value at index 0
console.log(marks[0]);


heros[0] ="tony stark";
console.log(heros[0]); // array is mutable whereas string is immutable

//================================================================
//looping in arrays 

//for loop


for(let i=0; i<heros.length; i++){
    console.log(heros[i]); //

}


// for-of loop 
for(let hero of heros){
    console.log(hero); //
}
//==============================================================
