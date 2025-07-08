/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);



Part 1:Debbuging Challenge
Original Code with Bugs

let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

Problems I found in this code are :
"5" - 2 is okay JavaScript implicitly converts "5" to 5 because of  - .
Boolean("false") is always true since any non-empty string is truthy.
"25" + 5 result in string concatenation it executes "255" instead of the numeric 30.

Fixed code with Explicit type conversions:
Explanation:
Implicit converts string to number

let result = "5" - 2;
console.log("The result is:" + result); //3

Explicitly check string content

let isValid =("false" === "true")? true : false;
if (isValid){
  console.log("This is Valid!");
} else {
  console.log("This is not Valid!");
}

Explicitly convert to number

let age= "25";
let totalAge = Number(age) + 5;
console.log("Total Age:" + totalAge); //30

Part 2:
My Own Examples
Implicit type Conversion

console.log("5" * 2); // Output = 10
// JavaScript implicitly converts to "5" to number this is because "*" expects number.

Explicit type Conversion(EdgeCase : Undefined)

let input = undefined;
console.log("Original value:" , input , " | type:" , typeof input);

let converted = Number(input);
console.log("After Number conversion:" , converted , " | type:" , typeof converted);
// Output gives NaN type number

Overall Full Combined code after removing bugs:


let result = "5" - 2;
console.log("The result is:" + result); 

let isValid =("false" === "true")? true : false;
if (isValid){
  console.log("This is Valid!");
} else {
  console.log("This is not Valid!");
}

let age= "25";
let totalAge = Number(age) + 5;
console.log("Total Age:" + totalAge); 
