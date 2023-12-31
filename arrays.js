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
//methos in arrays 

let newY  = ["a","b","c","d","e","f","g"];
 
console.log( newY );

//Push( ) : add to end
newY.push( "A" , 1)
console.log( newY); 
//Pop( ) : delete from end & return
let deletd = newY.pop()
console.log( newY );
console.log( "deleted",deletd );

//toString( ) : converts array to string

console.log( newY.toString() );

//Concat( ) : joins multiple arrays & returns result

let oldY= ["Z","X`","Y"];
let con = newY.concat( oldY );
console.log( con );

//unshift(): add to start
oldY.unshift( "A");
console.log( oldY);


// shift( ) ; delete from start & return
let val = oldY.shift();
console.log( val );
console.log( oldY );

//Slice( ) : returns a piece of the array (do not change in  original array)
// slice( startldx, endldx )
// endIdx is non inclusive
console.log( newY );
let sli = newY.slice( 1 ,4);
console.log( sli );



// Splice( ) : change original array (add, remove, replace)
// splice( startldx, delCount, newEl1 )

let num = [0 ,1 ,2,3,4,5,6,7,8];
console.log(num); 
num.splice(2,3); 
console.log(num); 
num.splice(1,1,2);
console.log(num); 