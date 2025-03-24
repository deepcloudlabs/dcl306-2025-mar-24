class Employee {
    constructor(firstName, lastName,salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
//        this.sayHello = this.sayHello.bind(this);
//        this.increaseSalary = this.increaseSalary.bind(this);
    }

    sayHello = () => {
        console.log(`Hello ${this.lastName}, ${this.firstName}`);
        console.log(this)
    }

    increaseSalary = (rate)=> {
        this.salary *= (1.0 + rate / 100);
    }
}

let jack = new Employee("Jack", "Bauer", 1_000_000);
jack.sayHello();
setInterval(jack.sayHello, 5_000);