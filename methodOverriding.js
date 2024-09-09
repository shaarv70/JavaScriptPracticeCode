class Car{

   minspeed=100;
    constructor(make,model){
    this.make=make;
    this.nodel=model;
  }

  startEngine(){
    console.log("starting engine for car);")
  }

}

class Audi extends Car{

    minspeed=10;
    startEngine(){
        console.log("starting engine for audi car);")
      }
    
      autoParking(){
            console.log("this is audi auto parking");

      }



}



const c1=new Audi();
c1.startEngine(); //method overriding
c1.autoParking();
console.log(c1.minspeed);//in ths case preference will be given to child class

const c2= new Car();
c2.startEngine();
//c2.autoParking();//throws error
