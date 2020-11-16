// Declare variables and use the assignment operators ( print the results)

let varOne = 18;
let varTwo = 16;
let varThree = 14;
let varFour = 12;
let varFive = 10;

varOne %= 3;
console.log(varFive);

varFour += 4;
console.log(varFour);

varThree -= 7;
console.log(varThree);

varTwo *= 3;
console.log(varTwo);

varOne /= 3;
console.log(varOne);


// Try out the two kind of alerts that have been studied.

window.alert('Prv ALERT');
alert('Vtor ALERT');
let printOut = confirm('ALERTTTT');
console.log(printOut);

// Try out the different types of loggings in the console

console.error('Ова е ерор лог');
console.table(['Лимон', 'Круши', 'Киви']);
console.log(['Банани', 'Мандарини', 'Ананас']);
let fruits = {name: 'авокадо', year: 2020};
console.dir(fruits);
console.info('Homework 2 JavaScript');
console.time('script');
setTimeout(() => {
     console.timeEnd('script');
}, 7000);


