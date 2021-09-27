const input = require('readline-sync');
let a = Number(input.question("Enter the # of letters that will be relocated: "))
console.log(typeof(a));
let str = "LaunchCode";

if (a > str.length) {
  a = 3 //console.log("This value is greater than initial string")
} 

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = ' ';

newStr= (str.slice(a) + str.slice(0,a));
console.log(newStr);

//let modStr = "Lau"

//let finalStr = newStr.concat(modStr);
//console.log(finalStr);




//Use a template literal to print the original and modified string in a descriptive phrase.

let tempLit = `The original string is read as follows '${str}'' and the modified pig latin string is this '${newStr}'.`

console.log(tempLit);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
/*
if (a > str.length) {
  console.log("This value is greater than initial string")
}

}
*/
let newTempLit = `The number ${a} is dictated by the input received from variable a and if variable a is greater than ${str.length} it will return 3, this is an error`
console.log(newTempLit);