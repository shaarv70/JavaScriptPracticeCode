//List
/* 
Maintains Insertion Order
Allows Duplicates
Heterogeneous Values - can store mixed type
*/

const arr = [1, 2, "three", 2];
console.log(arr); // [1, 2, "three", 2]
const mylist=  new list();


//Arraylist
/* Maintains Insertion Order: ✅ Yes.
Allows Duplicates: ✅ Yes.
Null Keys/Values: ✅ Allowed.
Use Case: Dynamic-sized array.
Thread-Safe: ❌ No (use Vector for thread safety) */
const arrayList = [1, 2, 3];
arrayList.push(4); // Dynamic resizing
console.log(arrayList); // [1, 2, 3, 4]

const check=new arrayList();


//Linkedlist
/* Maintains Insertion Order: ✅ Yes.
Allows Duplicates: ✅ Yes.
Null Keys/Values: ✅ Allowed.
Use Case: Doubly linked list; better performance for frequent insertions/removals.
Thread-Safe: ❌ No. */

const list = new LinkedList();

// Append values
list.append(10);
list.append(20);
list.append(30);

// Print list
list.print();  // Output: 10, 20, 30

// Delete a value
list.delete(20);

// Print list again
list.print();  // Output: 10, 30

