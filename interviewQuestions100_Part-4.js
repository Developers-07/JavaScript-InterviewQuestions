// 31. even or odd

let n = 30;
console.log(n % 2);


// 32.

let data = {
    name : 'Zishan'
};

delete data.name;
console.log(data);


// 33. convert data to boolean false value & true value

let d = "true";
console.log(!d);
console.log(!!d);


// 34. difference between map and forEach function

    /*
       map() --> this function return something
       const ans = arr.map((n) => {
             return n*2;
       })

       forEach() --> this function return nothing
       arr.forEach((value, index, arr) =>{
         sum = sum+value;
       })
    */


// 35.

let arr = ['Zishan', 'Disha', 'Synthea', 'Beauty', 'Rini'];
delete arr[3];
console.log(arr);

arr[3] = 'Liza';
console.log(arr);


// 36.

let ar = ['Zishan', 'Disha', 'Synthea', 'Beauty', 'Rini'];
delete ar[3];
console.log(ar);
console.log(ar.length);


// 37.

let a = [1, 2, 3, 4];
let b = [4, 5, 6, 7];

let ans = a.concat(b);
let res = [...a, ...b];
console.log(ans);
console.log(res);


// 38.

let p = 3 ** 3;
console.log(p);


// 39.

let num = 2;

setTimeout(() => {
    console.log(num);
}, 0)

num = 100;


// 40.

let c = 30;
let C = 40;

console.log(c);
console.log(C);









