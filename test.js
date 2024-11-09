let g=[1,2,3,4,5,6,7];

let k= g.map((e)=>{

    return e+2;
})
console.log(k);


class Car{


constructor(name,price)
{
    this.name=name;
    this.price=price;

}

 addTOCart()
   {
       console.log(`My car name is ${this.name} and price is ${this.price}`);

   }



}

const c= new Car("BMW",120);
c.addTOCart();