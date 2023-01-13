// 11.

let naam;
naam = {};
console.log(naam);


// 12.

function fruit() {
    console.log("Woof");
}

fruit.name = "apple";

fruit();


// 13.

function sum(a, b) {
    return a + b;
}

console.log(sum(1, "5"));


// 14.

let num = 0;
console.log(++num);
console.log(num++);
console.log(num);


// 15.

function getAge(...args) {
    console.log(args);
    console.log(typeof args);
}

getAge(22);


// 16.

    /*function age() {
        'use strict';
       a = 22;
      console.log(a);
    }

    age();*/


// 17.

const s = eval('3*5+5');
console.log(s);


