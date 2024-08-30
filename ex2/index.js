// Rewrite map function in array
Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

// Test
// Case 1: Callback with 1 parameter
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.myMap(num => num * 2);
console.log(doubledNumbers);

// Case 2: Callback with 2 parameters -> return array object with new age = age + index
const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];
const agedPeople = people.myMap((person, index) => ({ ...person, age: person.age + index }));

console.log(agedPeople);

