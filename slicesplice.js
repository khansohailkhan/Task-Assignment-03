// Array of fruits
var fruits = ['Apple', 'Orange', 'Banana', 'Grapes', 'Mango'];
console.log("Original Array:", fruits);
console.log('---------------------------------------------------------');
// Using slice to create a subarray (copy) 
var subArrayCopy = fruits.slice(1, 4); // Extracts elements from index 1 to 3 (exclusive)
console.log("Subarray (Copy) using slice:", subArrayCopy);
console.log('----------------------------------------------------------');
// Using splice to create a subarray and modify the original array
var subArraySplice = fruits.splice(2, 3); // Removes elements from index 2 to 4 and returns them
console.log("Subarray using splice:", subArraySplice);
console.log('-----------------------------------------------------------');
console.log("Array after splice:", fruits);
console.log('-----------------------------------------------------------');
