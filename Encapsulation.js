class Person {
    #age; // private field
    constructor(name, age) {
      this.name = name;
      this.#age = age;
    }
    getAge() {
      return this.#age;
    }

    #getName(){
       console.log(this.name); 
    }
    
    returnMethod(){
      return this.#getName();

    }
}
  
  const person = new Person("Alice", 25);
  console.log(person.getAge()); // Output: 25
  person.returnMethod();
  
  