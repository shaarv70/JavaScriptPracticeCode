/* Jasmine is a behaviour driven development framework for testing JS ConvolverNode. It does nit depends
on any other JS framework or it doesnt require a DOM. It has a clean syntax so that we can write our sript easily */

let add=(a,b)=>a+b;

let sub=(a,b)=> a-b;

describe('Calculator',()=>{   //it blocks are called specs

    beforeAll(()=>{
        console.log("I must run only once");
        
    });
    afterAll(()=>{
        console.log("I must run only once  after");
        
    });
    


   beforeEach(()=>{
    console.log("Iam running before every spec");
    });
    afterEach(()=>{
        console.log("Iam running after every spec");
        });
   
    it('Add 2 numbers',()=>{
    console.log(add(2,3));
   });

   fit('Sub 2 numbers',()=>{       // If I want to run only this spec then i can use fit which means focus

    console.log(sub(3,2))
    expect(sub(2,3)).not.toBe(5);
   });

   xit('Add  numbers',()=>{              //if i want to exclude the test then will use xit which means exit or skip
    expect(add(2,3)).toBe(5);
   });


})
