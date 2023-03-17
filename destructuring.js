1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
//it will print 'tesla' and 'mercedes'
console.log(randomCar)
console.log(otherRandomCar)


2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//name is not defined error
console.log(name);
console.log(otherName);


3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
//it will print the password '12345' and then give me 'undefined'.
console.log(password);
console.log(hashedPassword);


4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; 2
const [,,,second] = numbers; 5
const [,,,,,,,,third] = numbers; 2
//Predict the output
// false, true
console.log(first == second); false
console.log(first == third); true


5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
//print = 'value', array of numbers, 1 and 5
console.log(key);
console.log(secondKey); 
console.log(secondKey[0]);
console.log(willThisWork);


