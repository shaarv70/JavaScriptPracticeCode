class Check{

static #age;
constructor(mane,age){

    this.mane=mane;
    Check.#age=age;
}

getAge()
{
    return Check.#age;
}
}

const c1 = new Check("Arvind",30);
console.log(c1.getAge());
