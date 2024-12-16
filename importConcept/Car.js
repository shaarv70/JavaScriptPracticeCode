class Car{

    constructor(name,price,model,color){

         
    this.name=name;
    this.price=price;
    this.model=model;
    this.color=color;
}
refuel(){

    console.log(`the car is refuling by${this.name}`);
    console.log("the car price is:"+this.price)
}

}    
exports.car    =           Car;
//alias or nickname        Classname         //with the nickname the constructor of this class will be called in another class