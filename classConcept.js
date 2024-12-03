// Inside class we cannot use var, let and const


class Car{

  constructor(name,price,model,color) //In js we dont have to name the contructor same as the classname llike java 
  { 
    this.name=name;  //here also we can directly initialize the variable without declaring it.
    this.price=price;  //and constructor overloading is not possible in JS
    this.model=model;
    this.color=color;
}

//It will throw error on using multiple constructor at run time
   
    refuel(){

       console.log(`the car is refuling by${this.name}`);
       console.log("the car price is:"+this.price)
}

}

const c1= new Car("BMw",1200,"520D","blue");
c1.refuel();
console.log(c1.price);

const c2= new Car("Audi",12,"R8","green");
console.log(c2.color);
