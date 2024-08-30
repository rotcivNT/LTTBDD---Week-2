// Rewrite reduce function in array
Array.prototype.myReduce = function (callback, initialValue) {
    // If not pass initial value -> get first element in array for initial value
    let accumulator = initialValue !== undefined ? initialValue : this[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}
// Test
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);