/* In a class, the constructor is a method that will be called whenever an instance of that class is created.
You can define properties and set initial values within the constructor.
A class can only have one constructor. Attempting to define more than one will result in an error. */

class Person {
    constructor(name, age) {
      this.name = name; // Initialize the `name` property
      this.age = age;   // Initialize the `age` property
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const john = new Person("John", 30);
  john.introduce(); // Output: Hi, I'm John and I'm 30 years old.
  console.log(john.name);
  