//Stack:A Stack is a linear data structure that follows LIFO (Last In, First Out)
/* 
Arrays can be used directly for stack-like behavior.
Insertion Order:yes
Allows Duplicates:yes
Thread-Safe:no
Null Values:yes */

// Using Array
const stack = [];
stack.push(1); // Add element
stack.push(2);
console.log(stack); // [1, 2]
stack.pop(); // Remove last element
console.log(stack); // [1]
