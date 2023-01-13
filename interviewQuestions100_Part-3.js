// 21.

//JSON.parse();
// What this method will do ---> parses json to a javascript value


// 22.

/*let name = 'Disha';
function getName() {
    console.log(name);
    let nam = 'Zishan';
}
getName();*/


// 23.

let name = 'Tamanna';
function getName() {
    console.log(name);
}
getName();


// 24.

console.log(`${(x => x)('I love')} to program`);


// 25.

function sumValues(x, y, z) {
    return x + y + z;
}

console.log(sumValues(...[1, 2, 3]));


// 26.

const user = 'Code step by step';
console.log(!typeof user === Object);
console.log(!typeof user === String);
console.log(!typeof user === false);


// 27.

const n = 'Zishan';
const a = 23;

console.log(isNaN(n));
console.log(isNaN(a));


// 28. what can modify this Object

let myObj = { name: 'Zishan' };

Object.seal(myObj);

myObj.name = 'Disha';
console.log(myObj);


// 29. remove array first element

let arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr);

// Another way
// arr.splice(0, 1,);
// console.log(arr);


// 30. remove array last element

let ar = [1, 3, 5, 7, 9];
ar.pop();
console.log(ar);

