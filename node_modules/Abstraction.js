/*
Abstraction allows you to define complex logic in a simple interface by hiding implementation details.
While JavaScript doesn’t have native support for abstract classes or methods (like some other languages), 
you can enforce abstraction by throwing errors in base class methods to ensure derived classes 
implement specific methods.
*/

class Appliance {
    turnOn() {
      throw new Error("turnOn() must be implemented by subclass");
    }
  }
  
  class Fan extends Appliance {
    turnOn() {
      console.log("Fan is now running");
    }
  }
  
  const fan = new Fan();
  fan.turnOn(); // Output: Fan is now running
  