let people = [
    {fname: 'David', lname: 'Rayy', age: 34}, 
    {fname: 'Suzanne', lname: 'Collins', age: 38}, 
    {fname: 'Walter', lname: 'Isaacson', age: 24}, 
    {fname: 'John', lname: 'Doe', age: 51}, 
    {fname: 'Jane', lname: 'Donnson', age: 20}
];

// Calculate the sum of the ages - people array
const sum = people.reduce((a,{age}) => a + age,0);
console.log(sum);

//Find the people that are older than 36

for (let i = 0; i < people.length; i++) {
    if (people[i].age > 36) {
        console.log('Older than 36 are: ' + people[i].fname);
    }
}

// Find the people that are smaller than 24

for (i = 0; i < people.length; i ++) {
    if (people[i].age < 24) {
        console.log('Smaller than 24 is: ' + people[i].fname)
    }
}

// Find the person with the longest name
let pNames = [];

for (let i = 0; i < people.length; i++) {
    pNames.push(people[i]['fname'])
    
};

pNames.sort((a, b) => {
    return b.length - a.length;
});

console.log(`${pNames[0]} has the longest name.`);










numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];

// Multiply every element by 3 
let byThree = numbers.map(number => {
    return number * 3;
});
console.log(byThree);

// Sort the numbers (ascending and descending)
numbers.sort((a,b) => {
    //console.log(a);
    //console.log(b);
    return a-b;
});
console.log(numbers);

numbers.sort((a,b) => {
    //console.log(a);
    //console.log(b);
    return b-a;
});
console.log(numbers);

// // Find the sum of the numbers
// var numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];
// var sum = numbers.reduce(function (a,b) {
//     return a +b;
    
// },0);
// console.log(sum);

//Find max and min in the array
var arr = [1, 4, 24, 67, 1029, 340, 5, 200, 36];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max);

//min in the array
var arr = [1, 4, 24, 67, 1029, 340, 5, 200, 36];
var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
});
console.log(min);

// Find second largest element in the array
numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];
secondLargest = numbers.slice(0).sort(function(a,b){return b-a})[1]; 
console.log(secondLargest);

// Find the total numbers of even and odd elements in the array
numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];

liste(numbers);

function liste(arr) {
  var sumOdd = 0;
  var sumPar = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
    }
  }
  
  console.log("Odd : " + sumOdd);
  console.log("Even : " + sumPar);
}

// Given an array loop throught it and display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration
array = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]
for (i = 0; i < array.length; i++){
    if (array[i] % 5 == 0 && array[i] <= 150) {
        console.log(array[i]);
    }
}



