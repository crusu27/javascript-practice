//Prototypes
//Task 1.1
let head = {
    glasses: 1
};
let table = {
    pen: 3, __proto__: head
};
let bed = {
    sheet1: 1, pillow: 2, __proto__: table
};
let pockets = {
    money: 2000, __proto__: bed
};
console.log(pockets.pen, bed.glasses);

//Task 1.2
//Answer the question: is it faster to get glasses as pockets.glasses or head.glasses?
//Answer: head.glasses is faster because glasses is a direct property of head, while pockets.glasses requires searching through the prototype chain.

//Task 2
//We have rabbit inheriting from animal. If we call rabbit.eat(), which object receives the full property: animal or rabbit?
//Answer: Rabbit -> When we call rabbit.eat(), the method eat isn't found in rabbit, so JS finds it in the prototype animal. But is not determined
//by where the method is found. It is always the object before the dot, which here is rabbit
let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.eat();

console.log(rabbit.hasOwnProperty('eat'));
console.log(animal.hasOwnProperty('eat'));


//Classes
//Task 1
class Clock {
    constructor(template) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => {
            this.render()
        }, 1000);
    }
}

let clock = new Clock('h:m:s');
clock.start();
clock.stop();


//Objects
//Task 1
function count(user) {
    return Object.keys(user).length;
}

let user = {
    name: 'John',
    age: 30
}
console.log(count(user));


//Task 2
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

console.log(sumSalaries(salaries)); // 650


//Destructuring assignment
//Task 1
let user2 = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user2;
console.log(name, age, isAdmin);


//Map and Set
//Task 1
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = [
    "Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values))


//Task 2.
//Why it fails: map.keys() doesn't return an array. It returns a Map Iterator, which can be iterated over using for...of. Unlike array, it doesn't
//have array methods such as push(), map(), or filter(). Therefore, keys.push is undefined, and calling it throws a TypeError.

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);