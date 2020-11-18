// Create person object with properties firstName and lastName and add coresponding values.

let person = {
    firstName: 'Goran',
    lastName: 'Naumcheski'
};


// Print the values of the properties of the object. Use both approaches.

console.log(person.firstName);
console.log(person.lastName);
console.log(person['firstName']);
console.log(person['lastName']);


// Print the whole firstName and lastName of the person.

console.log(person.firstName + ' ' + person.lastName);


// Add the property age and coresponding value to the person object. Use both approaches.

person.age = 24;
person['age'] = 24;


// Print how old the person is.

console.log(`The person is ${person.age} years old.`);


// Find the type of the variable person.

console.log(`The person variable is an ${typeof person}.`);


// Create another person object. Populate the object with coresponding values.

let person2 = {
    firstName: 'Goran',
    lastName: 'Pandev',
    age: 37
}


//8. Find out which person is older.

if (person.age > person2.age) {
    console.log(`${person.firstName} is older than ${person2.firstName}.`);
} else if (person.age == person2.age) {
    console.log(`${person.firstName} and ${person2.firstName} are the same age.`);
} else if (person2.age > person.age) {
    console.log(`${person2.firstName} is older than ${person.firstName}.`);
}


//9. Find out how many years the person1 is older/younger from person2.

let ageDiff;

if (person.age > person2.age) {
    ageDiff = person.age - person2.age;
    console.log(`${person.firstName} is ${ageDiff} years older than ${person2.firstName}.`);
} else if 
(person.age == person2.age) {
    ageDiff = 0;
    console.log(`Both ${person.firstName} and ${person2.firstName} are the same age.`);
} 
else if (person2.age > person.age) {
    ageDiff = person2.age - person.age;
    console.log(`${person2.firstName} is ${ageDiff} years older than ${person.firstName}.`);
}


//10. Create another peson object. Populate the object with coresponding values.

let person3 = {
    firstName: 'Darko',
    lastName: 'Dimitrieski',
    age: 25
}


//11. Find the sum of the years of the people.

let ageSum;
ageSum = person.age + person2.age + person3.age;
console.log(`The sum of all the person objects ages is ${ageSum}`);


//12. Find the average of the years of the people.

let ageAvg;
ageAvg = ageSum / 3;
console.log(`The average of all people ages is ${ageAvg}`);


//  Find out who is the youngest of all three people.

