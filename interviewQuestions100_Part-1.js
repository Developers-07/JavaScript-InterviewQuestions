// 1. compare two array

let a = [];
let b = [];

console.log(a == b);
console.log(a === b);


//  2.

let a1 = []
let b1 = a1;

console.log(a1 == b1);
console.log(a1 === b1);


// 3.

let a2 = [20];
let b2 = [20];

console.log(a2[0] == b2[0]);
console.log(a2[0] === b2[0]);


// 4.

let arr = [1, 2, 3, 4, 5];
let obj = { name: 'Zishan', dept: 'CSE', varsity: 'Daffodil International University' };
console.log(...arr);


// 5.

console.log(typeof NaN); 
console.log(typeof null);
console.log(typeof undefined);


// 6.

let num = 10 - - 10;
console.log(num);


// 7.

let set = new Set([1, 1, 2, 3, 4]);
console.log(set);


// 8.

let data = { name: 'Disha', sign: 'Love❤️' };
console.log(delete data);
console.log(delete data.name);
console.log(data);


// 9.

let ans = ['Disha', 'Liza', 'Synthea', 'Mim', 'Rini'];
let [x, y] = ans;
console.log(x, y);


// 10.

let res = ['Disha', 'Liza', 'Synthea', 'Mim', 'Rini'];
let [, , z] = ans;
console.log(z);





