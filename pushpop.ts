// Push and pop in TypeScript

// Creating an array
const fruits = ["Apple","Banana", "Orange", "Grapes", "Strawberry"]
console.log("Before push:", fruits); // [1, 2, 3, 4]
//console.log('---------------------------');
 
// Using push to add elements to the end of the array
fruits.push("Mango")
console.log('---------------------------');
console.log("After push:", fruits); // [1, 2, 3, 4, 5, 6]
console.log('---------------------------');

// Using pop to remove the last element from the array
fruits.pop();
console.log("Popped element:", fruits.pop()); // 6
console.log('---------------------------');
console.log("After pop:", fruits); // [1, 2, 3, 4, 5]
console.log('---------------------------');

// Using unshift to add elements to the beginning of the array
fruits.unshift('Strawberry');
console.log("After unshift:", fruits);

console.log('---------------------------');
let shiftedFruit: string | undefined = fruits.shift();
console.log("Shifted fruit:", shiftedFruit);
console.log("After shift:", fruits);
console.log('---------------------------');