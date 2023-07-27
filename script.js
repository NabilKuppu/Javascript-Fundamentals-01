"use strict";

console.log(`Hello World !`);

/* Variables and Values
const firstName = "Md.";
const lastName = "Nabil";
const rollNumber = 112;
const hasNid = true;
let isMarried;
//Data types: String ,Number,Boolean,Null, Undefined
console.log(firstName + " " + lastName);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof rollNumber);
console.log(typeof hasNid);
console.log(typeof isMarried);
console.log(typeof undefined);
console.log(typeof null);*/
/*Let , Var , Const difference
//Let means we can manipulate the variable with value but in const we cann't on the contrary
in var we can manipulate the value as well as it is universal varaible declaration
let age;
age = 21;
age = 25;
console.log(age);
var yourAge1;
yourAge1 = 21;
yourAge1 = 25;
console.log(yourAge1);
const yourAge1;
yourAge1=25;
console.log(yourAge1)*/

// Basic operator : Assignment ,Comparision,Mathematical operators
// Comparision :>,<,>=,<=
const ageNabil = 2023 - 2003;
const ageNishu = 2023 - 1998;
if (ageNabil > ageNishu) {
  console.log(`Nabil is senior to Nishu by ${ageNabil - ageNishu} Years`);
} else if (ageNishu > ageNabil) {
  console.log(`Nishu is Senior to Nabil by ${ageNishu - ageNabil}`);
}
//Assignment;
let masturbation = 1;
masturbation++;
masturbation--;
masturbation += 5;
masturbation -= 5;
masturbation *= 5;
masturbation /= 5;
console.log(masturbation);
let num = Math.pow(2, 4);
num = Math.sqrt(9);
num = 9 * 9;
console.log(num);
