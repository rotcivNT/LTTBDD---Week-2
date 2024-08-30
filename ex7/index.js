// 27. Create a function that will receive an array of 
// numbers as argument and will return a new array with distinct elements

const getDistinctArray = (arr) => {
    return [...new Set(arr)];
}

// Test
const arr = [1, 1, 1, 2, 3, 3, 4, 5, 7, 7]

console.log(getDistinctArray(arr))