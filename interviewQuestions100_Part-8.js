// 81.

console.log(!!null);
console.log(!!'');
console.log(!!1);


// 82.

    // console.log(setInterval(() => console.log('Hi'), 1000))


// 83.

console.log([...'Zishan']);


// 84.

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'One');
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'Two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));


// 85.

let person = { name: 'Zishan' };
const num = [person]
person = null;
console.log(num);
console.log(person);
console.log(num[0].name);


// 86.

const user = {
    name: 'Disha',
    age: 22,
};

for (let item in user) {
    console.log(item);
    console.log(user[item]);
}


// 87.

let data = 3 + 4 + '5';
console.log(data);
console.log(typeof data);


// 88.

console.log(typeof 3 + 4 + '5');


// 89.

console.log(typeof (3 + 4 + '5'));


// 90.

console.log([] == []);
