class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Getter for full name
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter for full name
    set fullName(name) {
      const [first, last] = name.split(" ");  // concept of destructring
      this.firstName = first;
      this.lastName = last;
    }
  }
  
  // Usage
  const person = new Person("Alice", "Smith");
  console.log(person.fullName); // Output: Alice Smith
  
  // Using the setter
  person.fullName="John Doe"; //here setter method is also considered as a varible
  console.log(person.firstName); // Output: John
  console.log(person.lastName);  // Output: Doe
  console.log(person.fullName);  // Output: John Doe  //here we dont need to use brackets for getter method
  