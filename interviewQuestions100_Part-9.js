// 91.

let data = [1, 2, '3'].map((n) => {
    if (typeof n === 'number') return;
    return n * 2;
});

console.log(data);


// 92.

function getInfo(member) {
    member.name = 'Disha';
}

const person = { name: 'Zishan' };
getInfo(person);

console.log(person);


// 93.

function Car() {
    this.make = 'tata';
    return { make: 'Kia' };
}

const myCar = new Car();
console.log(myCar.make);


// 94.

/*(() => {
    let x = (y = 10);
})();

console.log(typeof x);*/


// 95.

(() => {
    let x = y = 10;
    // let x = 10;
    // var y = 10;
})();

console.log(y);


// 96.

(() => {
    let x = 10;
})();

(() => {
    let x = 10;
})();

console.log(typeof x);


// 97.

(() => {
    let x = y = 10;
})();

(() => {
    let x = y = 20;
})();

console.log(y);


// 98.

let n = 100;

(() => {
    var n = 20;
})();

console.log(n);


// 99.

console.log(!true - true);


// 100.

console.log(true + "10");
console.log(typeof (true + "10"));
console.log(true + +"10");



