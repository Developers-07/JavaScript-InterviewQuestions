// 61.

let name;
nmae = {};
console.log(name);
console.log(nmae);


// 62.

function fruit() {
    console.log('Woof!!');
}

fruit.name = "apple";
fruit();


// 63.

function sum(a, b) {
    return a + b;
}
console.log(sum(1, '2'));


// 64.

let num = 0;

console.log(num++);
console.log(++num);
console.log(num);


// 65.

function getAge(...args) {
    console.log(args);
    console.log(typeof args);
}

getAge(22, 3, 5, 7, 9);


// 66.

/*function getMoney() {
    'use strict';
    money = 10000000000;
    console.log(money);
}
getMoney();*/



// 67.

const s = eval('10 * 10 + 5');
console.log(s);


// 68.

     // How long is cool_secret accessible?
     // sessionStorage.setItem('cool_secret', 123);



// 69.

const obj = { 1: 'A', 2: 'B', 3: 'C' };
console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1));


// 70.

const obj1 = { a: 'One', b: 'Two', a: 'Repeat' };
console.log(obj1);




