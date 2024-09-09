class Car{

 static wheels=4;
constructor(name,model,price){
this.name=name;
this.price=price;
this.model=model;
this.wheels=50;
}

static stop(){
    console.log("car-stop");
}

drive(){

    console.log(this.name+" is driving");
}
}

const c1= new Car("BMW","te23d",1200);
console.log(`${c1.name},${c1.model},${c1.price},${Car.wheels},${c1.wheels}`);
console.log(Car.wheels);
Car.stop();
//c1.stop(); not accessible throws error at runtime
c1.drive();
