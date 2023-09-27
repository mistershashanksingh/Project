console.log("Put effort to these also called as condition in js");

var str_comp = ("yamaha" == "kawasaki") ? true : false; 
console.log("Given condition is : " + str_comp);

// import module for read input from user
const readline = require("readline-sync");

//var koenigsegg = new Array["Regera", "Agera", "One:1", "Jesko"]
var koenigsegg = "Regera"

console.log("We have kept a car name of koenigsegg Guess the name and win ");
var str_of_array = String(readline.question());


if (str_of_array == koenigsegg)
{
    console.log("You Win the game\n**hurrey**");
}

else 
{
    console.log("Your Answer is not correct \n ---Sorry try next time---");
}