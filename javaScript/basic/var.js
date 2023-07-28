// This my first javascript project 

console.log("console.log(This is the way to print char over screen);");

// start working with var 
var ecapChar = "This is the way to print Escap character on screen  '\'' '\"' '\\' just type \\ before that character";

console.log(ecapChar);

// Print concatination 

const firstString = "First String ";
const secondString = "Second String";

let concat = firstString + secondString;

console.log("concatination of two constanat or variable : " + concat)

console.log("Here we have the lenght of string : " + concat.length);

console.log("substring of first word : " + concat.substring(6, 12));
console.log("substring of second word : " + concat.substring(20, 26));

console.log("Index of 't' in the word of String : " + concat.indexOf('t'));
console.log("Index of 't' in the word of String : " + ecapChar.indexOf('c'));

console.log("Print the last character of Printed line : " + concat.charAt(concat.length - 1))
console.log("Print the last character of Printed line : " + ecapChar.charAt(ecapChar.length - 2))

console.log('---This is how we can play with variable and constant---') 