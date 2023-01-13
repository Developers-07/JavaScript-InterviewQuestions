// 71.

for (let i = 1; i < 5; i++){
    if (i === 3) continue;
    console.log(i);
}


// 72.

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

foo();
bar();
baz();


// 73.

console.log([1,2,3] + [2,4,5]);
console.log(['a', 'b'] + ['c', 'd']);
console.log(![]);
console.log(![] + []);
console.log(['4'] - ['2']);
console.log([4] - ['1']);
console.log(4 + - 5);


// 74.

const person = { name: 'Zishan' };
function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 22));
console.log(sayHi.bind(person, 22)());


// 75.

function sayHello() {
    return (() => 0)();
}
console.log(sayHello());
console.log(typeof sayHello());


// 76.

function sayHello1() {
    return () => 0;
}
console.log(sayHello1());
console.log(typeof sayHello1());
console.log(typeof sayHello1()());


// 77.

console.log(typeof typeof 1);


// 78.

const num = [1, 2, 3];
num[6] = 7;
console.log(num);


// 79.

const arr = [1, 3, 5];
arr[7] = arr;
console.log(arr);


// 80.

   // Everything in JavaScript is either Primitive or Object 


