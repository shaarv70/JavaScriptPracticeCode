//Map

/* Maintains Insertion Order:yes
Allows Duplicate Keys:no
Allows Duplicate Values:yes 
Accepts Heterogeneous:yes
Thread-Safe:no
Best Use Case:key-value pairs(keys can be of any type)
*/

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map); // Map { 'key1' => 'value1', 'key2' => 'value2' }



//HashMap
/* Maintains Insertion Order: ❌ No.
Allows Duplicates:
Keys: ❌ No.
Values: ✅ Yes.
Null Keys/Values:
✅ Allows one null key.
✅ Allows multiple null values.
Use Case: Key-value pairs with fast lookups (O(1) for get/put).
Thread-Safe: ❌ No (use ConcurrentHashMap for thread safety). */

const hashMap = new Map();
hashMap.set(null, "value1");
hashMap.set("key1", "value2");
console.log(hashMap); // Map { null => 'value1', 'key1' => 'value2' }


//Linked HashMap
/* Maintains Insertion Order: ✅ Yes.
Allows Duplicates:
Keys: ❌ No.
Values: ✅ Yes.
Null Keys/Values: Same as HashMap.
Use Case: Key-value pairs while preserving order.
Thread-Safe: ❌ No. */

const linkedHashMap = new linkedHashMap();
linkedHashMap.set("key1", "value1");
linkedHashMap.set("key2", "value2");
linkedHashMap.set("key1", "value3"); // Overwrites "key1"
console.log(linkedHashMap); // Map { 'key1' => 'value3', 'key2' => 'value2' }

