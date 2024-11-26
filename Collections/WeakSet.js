/* Maintains Insertion Order:no
Allows Duplicates:no
Accepts Object Values Only:yes 
Thread-safe:no
Key Properties of WeakSet:
Only Objects Allowed: A WeakSet can only store objects as values (no primitives like numbers, strings, or booleans).
Weak References: The references to the objects in a WeakSet are weak, meaning the presence of an object in the WeakSet does not prevent its garbage collection.
No Iteration: WeakSet is not iterable, so you cannot loop through its contents using for...of, .values(), or .entries().
No Size Property: There is no .size property to check the number of elements in a WeakSet.
Methods:
.add(value) – Adds an object to the WeakSet.
.delete(value) – Removes the object from the WeakSet.
.has(value) – Checks if the object is present in the WeakSet.
*/

// Create a WeakSet
const weakSet = new WeakSet();

let obj1 = { name: "Object 1" };
let obj2 = { name: "Object 2" };

// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true

// Removing an object
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // Output: false

// Allowing garbage collection
obj2 = null; // The object will be garbage collected when no references exist
