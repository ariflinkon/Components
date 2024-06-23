class Calculator {
    /* constructor() {
        this.first = 0;
    } */

    second(a, b) {
        this.first = a + b;
        return this.first;
    }
}

let sum = new Calculator();
let balerCoder = sum.second(4, 2);
console.log(balerCoder, sum.first);