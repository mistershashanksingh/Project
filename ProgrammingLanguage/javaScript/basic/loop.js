// import module for read input from user
// Here will go with while loop
const readline = require("readline-sync");

console.log("Now the while Loop program");
console.log("Please enter any number between 1 to 10");
var count = Number(readline.question());
var user_input = count;

while (user_input < 21) {
  if (user_input % 2) {
    user_input++;
    continue;
  }
  console.log(user_input);
  user_input++;
}

// Here will go with do-while loop
// console.log("Create a do_while loop program");

// console.log("Enter the age of yours");
// var console_println = Number(readline.question());
// var userInput = console_println

// do {
//   console.log("");
// } while (userInput==);
