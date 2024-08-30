// Create a function that will return the number of words in a text

const countWord = (word) => word.trim() ? word.split(" ").length : 0

// Test
const text = " "
const text1 = "hello world!"
console.log(countWord(text))
console.log(countWord(text1))