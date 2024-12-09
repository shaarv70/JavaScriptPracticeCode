//Primitive datatype
//nn bb ss u(null,number,byte,BigInt,String,Symbol,undefined)
 let a=null;
let b=346;
let c=true;
//let d=BigInt("567")+b;//throw error
let d= BigInt("567")+BigInt("6");
let e= "Harry";
let f= Symbol("I am a nice symbol");
let g= undefined;
console.log(a,b,c,d,e,f,g);
//typeof : it will give the result in string 
console.log(typeof d);

// object  it will store value in form of key and pair and key must be always in string, values can be of any type
const item= {
     "Harry":true,
     "Shubh":false,
     "Lovish":67,
     "Rohan":undefined,
     fun:()=>{
          console.log("Hi this is from object!!");
               }
}
console.log(typeof item)
console.log(item);
console.log(item["Shubh"])//it will show the value of shubh
console.log(item.Harry);
item.fun();


//constructor function
function car(brand,model,price){
     this.brand=brand;
     this.model=model;
     this.price=price;
};
console.log(typeof car);//function
const c1=new car("BMW","520d",10000);
console.log(c1.brand+" "+c1.price);


// class style

class Customer{

     constructor(name,product){
          this.name=name;
          this.product=product;
     }

    addTOCart(){

     console.log(`${this.product} added to cart`);
    }
}
 
     const cust= new Customer("Arvind","Chips");
    console.log(cust.name +" "+ cust.product);
    cust.addTOCart();


    // Object.create(): with some prototype object

    const employeePrototype={
     
     printInfo:function(){

          console.log(`Hello Employee name is ${this.name}`);
     } 
     }
    
     const e1=Object.create(employeePrototype);
     e1.name="tommy";
     e1.printInfo();


     //Usig factory functions:it is a special function which return object always
      
     function dept(name,head){
     
          return {

               deptName:name,
               Hod:head,
               printInfo:function(){

                    console.log(`Hello dept name is ${this.deptName} and hod is ${this.Hod}`);
               } 
               
          }
      }

      const d1=dept("Physics","Rakesh");
      d1.printInfo();
      console.log(d1.deptName+" "+d1.Hod);



