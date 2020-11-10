// 1.Декларирај променливи од сите примитивни типови
let name = 'Goran';
let surname = 'Naumcheski';
let city = 'Gostivar';
let age = 24;
let isCold = true;
let  work = null;
let workLocation = undefined;

// испечати ги соодветно вредностите и типовите на променливите
console.log(name + ' tip: ' + typeof(name));
console.log(surname + ' tip: ' + typeof(surname));
console.log(city + ' tip: ' + typeof(city));
console.log(age + ' tip: ' + typeof(age));
console.log(isCold + ' tip: ' + typeof(isCold));
console.log(work + ' tip: ' + typeof(work));
console.log(workLocation + ' tip: ' + typeof(workLocation));

// промени ја вредноста на некоја од променливите

isCold = 'false';
work = 'operater';

/* Креирај константа и обиди се да и доделиш нова вредност. Што се случува? 
    дава error: Assignment to constant variable.
const laptop = 'Dell';
laptop = 'Asus'; 
*/

// декларирај променливи и употреби ги аритметичките оператори (да се испечатат резултатите)
let num1 = 3;
let num2 = 8;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1++);
console.log(num2--);

// декларирај променливи и употреби ги операторите за споредба (да се испечатат резултатите)
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);

// декларирај променливи и употреби ги логичките оператори (да се испечатат резултатите)
console.log(num1 < num2 && num1 <= 2);
console.log(num1 > num2 || num2 < 9);
console.log(num1 > num2 && num2 <11);