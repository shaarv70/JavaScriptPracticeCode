//Use TypeScript for strict interfaces, or simulate with classes/objects.

class Interface {
    constructor() {
        if (new.target === Interface) {
            throw new Error("Cannot instantiate an interface");
        }
    }

    method1() {
        throw new Error("Method must be implemented");
    }
}

class Implementation extends Interface {
    method1() {
        console.log("Method implemented");
    }
}

const impl = new Implementation();
impl.method1(); // "Method implemented"
