// Rewrite every function in array
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

// Test
const data1 = [1, 3, 4, 7, 9]
const data2 = [2 ,4 ,6]

console.log(data1.myEvery((item) => item % 2 === 0))
console.log("--------------------------------");

console.log(data2.myEvery((item) => item % 2 === 0))