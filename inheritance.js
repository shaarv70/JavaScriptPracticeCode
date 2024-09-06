class Automobile{

constructor(chassisNumber){
      this.chassisNumber=chassisNumber;
}

useAerodynamic(){
    console.log("Automobile aerodynamic")
}


}


class Vehicle extends Automobile{ 

    constructor(make,model,year,chassisNumber)
{
    super(chassisNumber); 
    this.make=make;
     this.model=model;
     this.year=year;
}

getInfo(){

return `${this.make}, ${this.model}, ${this.year}`;

}

startEngine(){

console.log("start Engine "+this.make)

}

stopEngine(){

    console.log("stop Engine");
}

}
class Car extends Vehicle{


    constructor(make,model,year,fuelType,chassisNumber)
    {
        super(make,model,year,chassisNumber);//calling parent class constructor
        this.fuelType=fuelType;
    }

    driverCar(){

        console.log("driving the car"+this.model);
    }

}
class Truck extends Vehicle{


    constructor(make,model,year,loadingCapacity)
    {
        super(make,model,year);
        this.loadingCapacity=loadingCapacity;
    }

    driverTruck(){

        console.log("driving the truck"+this.model+"capacity "+this.loadingCapacity);
    }

}


const  car1= new Car("Audi","R8",2021,"Petrol",11313);
const truck1= new Truck("Mahindra","Sumo",2024,1000);

car1.driverCar();
car1.startEngine();
console.log(car1.getInfo());
console.log(car1.fuelType);
car1.useAerodynamic();//multilevel inheritance
console.log(car1.chassisNumber);

truck1.startEngine();
console.log(truck1.getInfo());
console.log(truck1.loadingCapacity);

//multiple inheritance is not allowed in JS with classes, it will give error(syntactical) at compile time