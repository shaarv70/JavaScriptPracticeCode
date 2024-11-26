/* Maintains Insertion Order:no
Allows Duplicate Keys:no
Accepts Object Keys Only:yes 
Thread-safe:no
keys must be objects: A WeakMap key must be an object (not a primitive like a string or number).
Garbage Collection: If no other references exist to a key object, it is automatically garbage collected, and its associated value is removed from the WeakMap.
No iteration: WeakMap is not iterable, so you cannot use methods like .keys(), .values(), or .entries() to access all keys or values.
No size property: You cannot determine the size of a WeakMap because of its dependency on garbage collection.
Methods:
.set(key, value) – Adds a key-value pair.
.get(key) – Retrieves the value for the given key.
.delete(key) – Removes the key-value pair.
.has(key) – Checks if a key exists.*/

// Create a WeakMap
const weakMap = new WeakMap();

let key = { id: 1 }; // Object as a key
weakMap.set(key, "Metadata for key 1");

// Accessing the value
console.log(weakMap.get(key)); // Output: Metadata for key 1

// Checking for key existence
console.log(weakMap.has(key)); // Output: true

// Removing the reference
key = null; // The object is no longer referenced elsewhere

// After garbage collection, the entry is removed automatically
// Note: We can't directly observe this, as WeakMap doesn't allow iteration
