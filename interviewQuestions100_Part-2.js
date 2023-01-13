// 11.

let obj = { name: 'Zishan', age: 23, city: 'Satkhira' };
let { city } = obj;
console.log(city);


// 12. merge 2 object

let data = { name: 'Zishan', age: 23, dept: 'CSE' };
let info = { city: 'Satkhira', mail: 'zishanc901@gmail.com' };

data = {...data, ...info};
console.log(data);


// 13.

let d = { name: 'Zishan', age: 23, dept: 'CSE' };
let i = { city: 'Satkhira', mail: 'zishanc901@gmail.com' };

d = {d, ...i};
console.log(d);

// 14.

var dat = { name: 'Zishan', age: 23, dept: 'CSE' };
var inf = { city: 'Satkhira', mail: 'zishanc901@gmail.com', dept: 'EEE' };

dat = {...dat, ...inf};
console.log(dat);

// 15.

/*const name = 'Zishan';
console.log(name());*/


// 16.

const result = false || {} || null;
console.log(result);


// 17.

const res = null|| '' || false;
console.log(res);


// 18.

const r = [] || '' || true;
console.log(r);


// 19.

console.log(Promise.resolve(5));
console.log(Promise.resolve("I love You!!!"));


// 20.

console.log('❤️' === '❤️');


