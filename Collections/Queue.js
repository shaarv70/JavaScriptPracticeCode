//Queue: A Queue is a linear data structure that follows FIFO (First In, First Out).

/* Arrays can act as queues or you can implement one manually.
Insertion Order:yes
Allows Duplicates:yes
Thread-Safe:no
Null Values:yes */

// Using Array
const queue = [];
queue.push(1); // Add element to the end
queue.push(2);
console.log(queue); // [1, 2]
queue.shift(); // Remove first element
console.log(queue); // [2]
