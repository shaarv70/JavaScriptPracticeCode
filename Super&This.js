/* The super keyword is used to access and call functions on an object's parent (or superclass).
When used in a method within a subclass, super allows you to call a method from the superclass. */

/* super() super() Function
super() is specifically used within a subclass's constructor to call the constructor of its superclass.
This is necessary because, in JavaScript, if a subclass has a constructor, it must call super() before
 using this,otherwise an error will occur. super() must be called before accessing this in the constructor
  of a subclass, as it initializes the parent class. */

 /*  this Keyword
The this keyword refers to the current instance of an object.
In a method, this allows access to the object's properties and methods */

/* this() – Not Used in JavaScript
JavaScript does not support a this() function. However, in some other OOP languages like Java, this() can 
be used within constructors to call another constructor within the same class.In JavaScript, if you need
 to initialize an instance with some common setup logic, you can create a helper method within the class
  and call it from the constructor instead of using a this() call. */


  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calls the Animal constructor
      this.breed = breed;
    }
  
    makeSound() {
      super.makeSound(); // Calls Animal's makeSound method
      console.log(`${this.name}, the ${this.breed}, barks.`);
    }
  }
  
  const myDog = new Dog("Max", "Golden Retriever");
  myDog.makeSound();
  // Output:
  // Max makes a sound.
  // Max, the Golden Retriever, barks.
  