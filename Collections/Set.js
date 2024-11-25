/* Maintains Insertion Order: ✅ Yes.
Allows Duplicates: ❌ No (duplicates are automatically removed).
Accepts Single or Multiple Values: Single.
Heterogeneous Values :Yes
 */

const set = new Set([1, 2, 2, 3]);
console.log(set); // Set { 1, 2, 3 }
set.add(4); // Add an element
console.log(set.has(3)); // true


//Linked HashSet

/* Maintains Insertion Order: ✅ Yes.
Allows Duplicates: ❌ No.
Null Keys/Values: ✅ Allows one null value.
Use Case: Unique set of elements with predictable iteration order.
Thread-Safe: ❌ No.
 */

const linkedHashSet = new linkedHashSet();
linkedHashSet.add("a");
linkedHashSet.add("b");
linkedHashSet.add("a"); // Duplicate ignored
console.log(linkedHashSet); // Set { 'a', 'b' }


