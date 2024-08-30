// 32. Create a function that will capitalize the first letter of each word in a text
const captializeFirstLetter = (text) => text.trim().split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")

// Test
const text = ""
const text1 = "hello world"
console.log(captializeFirstLetter(text));
console.log("--------------------------------------------------------");

console.log(captializeFirstLetter(text1));
