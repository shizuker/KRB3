class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getInfo() {
        return `Сотрудник: ${this.name}, зарплата: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }

    getInfo() {
        return `Менеджер: ${this.name}, зарплата: ${this.salary}, команда: ${this.teamSize}`;
    }
}

class Shape {
    getArea() {
        return 0;
    }

    getPerimeter() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
}

const employee = new Employee("Анна", 50000);
const manager = new Manager("Иван", 80000, 5);
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4, 5);

console.log(employee.getInfo());
console.log(manager.getInfo());
console.log(circle.getArea(), circle.getPerimeter());
console.log(rectangle.getArea(), rectangle.getPerimeter());
console.log(triangle.getArea(), triangle.getPerimeter());

