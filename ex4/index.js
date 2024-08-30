// Rewrite find function in array
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

// Test
const data = [1, 2, 3, 4, 5, 6]
console.log(data.myFind(num => num > 3)) 