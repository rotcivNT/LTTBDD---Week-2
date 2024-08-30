// Rewrite Filter function in array
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

// Test
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log(evenNumbers);