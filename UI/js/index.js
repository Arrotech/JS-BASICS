console.log("Learn JavaScript");

// Use of variables
// One can re-asign variable values
let userName = "Harun";
console.log(userName);

console.log(typeof userName);

// Constants
// The key word constant is used in cases where you don't want the value of the variable to change
// You cannot re-asign a constant
const interestRate = 0.3;
console.log(interestRate);

//Data Types
// 1. String 2. Numbers 3. Booleans 4. Undefined 5. Null
let name = "harun"; //String literal
let age = 25; //Number literal
let isApproved = false; //Boolean literal
let firstName; //undefined
let surName = undefined; //undefined
let lastName = null; //null

//Objects
//1. Objects 2. Arrays 3. Functions
let person = {
    name: "Harun",
    age: 30
};

//Dot notation
person.name = "Gachanja";

//Bracket notation
person["name"] = "Gitundu"

console.log(person.name);
console.log(person);

//Arrays
let selectedLanguages = ["python", "java"];
selectedLanguages[2] = "javascript";
console.log(selectedLanguages);
console.log(selectedLanguages.length);
console.log(selectedLanguages[0]);

//Functions
function greet(name, age) {
    console.log("Hello " + name + " " + age);
}

greet("Mercy", 30);

function square(x) {
    return x * x;
}

console.log(square(4));