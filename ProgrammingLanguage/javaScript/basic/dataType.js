console.log('---This is how we can play with variable as string and variable as number---')

var strAsVar = "6";
var numAsVar = 7;

let multi = strAsVar * numAsVar;
let add = strAsVar + numAsVar;

console.log("6 + 7 = " + add + ' Here we add a string with a number');
console.log("6 * 7 = " + multi + ' Here we multiply a string with a number');

// This is space where forcefully treat a datatype to behave as it is manually set

add = numAsVar + Number(strAsVar);
console.log("6 + 7 = " + add + ' Here we add a string(that is forcefully set to behave like a number) with a number');

// now let's make our hand dirty by playing with some float datatype

var float_as_num = 3.141595903949;
var float_as_str = float_as_num.toFixed(4);

console.log("Value of PI = " + float_as_str);

// This is space where I forcefully treat a float datatype to behave like an integer using a bulitin function called parseInt
console.log("Value of PI = " + parseInt(float_as_num));

// Here amma gonna check dataType of variable 
console.log("Data Type of variable float_as_num : " + typeof (float_as_num));
console.log("Data Type of variable float_as_str : " + typeof (float_as_str));

// now will have to puzzle myself with boolean datatype

var boolean_val0 = Boolean(0);
var boolean_val1 = Boolean(10);
var boolean_val2 = Boolean(NaN);

console.log("Show me the value of my boolean_val0 dataType : " + boolean_val0);
console.log("Show me the value of my boolean_val1 dataType : " + boolean_val1);
console.log("Show me the value of my boolean_val2 dataType : " + boolean_val2);

// Here I am gonna compare the number and get boolean value as result
var numberOne = 32;
var numberTwo = 33;

console.log("Is 32 < 33 : " + (numberOne < numberTwo)); 
console.log("Is 32 <= 33 : " + (numberOne <= numberTwo));
console.log("Is 32 > 33 : " + (numberOne > numberTwo));
console.log("Is 32 >= 33 : " + (numberOne >= numberTwo));
console.log("Is 32 == 33 : " + (numberOne == numberTwo));
console.log("Is 32 != 33 : " + (numberOne != numberTwo));

// Now i an gonna use operator
console.log("Is 32 < 33 and Is 32 <= 33 : " + ((numberOne < numberTwo) && (numberOne <= numberTwo)));
console.log("Is 32 < 33 or Is 32 <= 33 : " + ((numberOne < numberTwo) || (numberOne <= numberTwo)));
console.log("Is 32 !< 33 : " + !(numberOne < numberTwo));
