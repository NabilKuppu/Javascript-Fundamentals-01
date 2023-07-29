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

/**  Basic operator : Assignment ,Comparision,Arithmetic operators
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

//Arithmetic Operator(+=addition,-=substraction,*=multiplication,/=division,%=remainder);
console.log(25 + 25);
console.log(25 - 25);
console.log(25 * 25);
console.log(25 / 25);
console.log(25 % 25);

//Operator Precedence

let x, y;
x = y = 25 - 10 - 5; //25-10-5 beacuse substraction is left to right   then y=10,x=10 and assigment left to right the
//but substraction has more precendence than the assignment that is why substraction works first then assignment
//For More : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
console.log(x, y);

const now = 2023;
const ageNishu = now - 1998;
const ageNabil = now - 2003;
// const averageAge = ageNishu + ageNabil / 2;ageNabil/2+ageNishu without Grouping()=grouping means Parenthesis
const averageAge = (ageNishu + ageNabil) / 2;
console.log(ageNishu, ageNabil, averageAge);
console.log(2 ** 3); //This is called expopentiation; result :8

//Coding Challenge-01

//task-1
const marksMass = 78;
const markHeight = 1.69;
const johnsMass = 92;
const johnHeight = 1.95;
//Task-02
const marksBMI = (marksMass / markHeight ** 2).toFixed(2);
const johnsBMI = (johnsMass / (johnHeight * johnHeight)).toFixed(2);
console.log(marksBMI, johnsBMI);
//Task-03
const marksHigherBMI = marksBMI - johnHeight;
console.log(
  `Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})  `
);
*/
