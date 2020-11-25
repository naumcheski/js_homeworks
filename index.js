// 1. Write a function to find first and last digit of a number.
  
function number (num) {
    return num % 10;
   
}
let lastDigit = number (51203516);
console.log(lastDigit);


// Write a function to reverse the following array using .reverse array method
let array = [10, 20, 30, 40, 50];
let arrayTwo = [].concat(array).reverse();
console.log(arrayTwo);

// 3.Write a functions to calculate the perimeter and the area of a square
//calculate perimeter
function perimeterSquare (a) {
    return 4*a;
}
let resultPerimeter = perimeterSquare (7);
console.log('The perimeter of a square is: ' + resultPerimeter);
//calculate area
function areaSquare (b) {
    return Math.pow(b,2);
}
let resultArea = areaSquare (3);
console.log('Area of a square is : ' + resultArea);

// 4. Write a functions to calculate the perimeter and the area of a rectangle
function perimeterRectangle (a,b) {
    return 2*a + 2*b;
}
let Perimeter = perimeterRectangle (7,9);
console.log ('Rectangle perimeter: ' + Perimeter);

function areaRectangle (w,h) {
    return w*h;
}
let resultAreaR = areaRectangle (3,6);
console.log('Rectangle area : ' + resultAreaR);

// 5. Write a functions to calculate the perimeter and the area of a circle
function perimeterCircle (r) {
    const pi = 3.14;
    return pi*(2*r)
}
let resultPerimeterC = perimeterCircle (6);
console.log('Circle perimeter: ' + resultPerimeterC);


function areaCircle (r) {
    const pi = 3.14;
    return pi * Math.pow(r,2);
}
let resultAreaCir = areaCircle (9);
console.log('circle area : ' + resultAreaCir);

