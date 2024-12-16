const myCar=require('./Car')
const c1= new myCar.car("BMW",123,"M5","Blue");  //here constructor is called based on the nickname
console.log(c1.color);
c1.refuel();
