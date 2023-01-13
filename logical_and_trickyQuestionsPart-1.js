// 1.

function fruit() {
    console.log(name);
   // console.log(age);

    var name = 'Zishan';
    //let age = 22;
}

fruit();


// 2.

    /*for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1);
  }*/


// 3.

    /*for (let i = 1; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1);
  }*/


// 4.

console.log(+true);
console.log(typeof +true);


// 5.

console.log(!"anil");
console.log(typeof ("anil"));


// 6.

let data = "size";
const bird = {
  size: "small",
}

console.log(bird[data]);
console.log(bird['size']);
console.log(bird.size);
console.log(bird.data);


// 7.

let c = { name: 'Disha' };
let d;

d = c;
c.name = 'Synthea';
console.log(d);


// 8.

var x;
var x = 10;
console.log(x);


// 9.

  /*var x;
    let x = 10;
    console.log(x);*/


// 10.

let a = 3;
let b = new Number(3);

console.log(typeof a + " " + typeof b);
console.log(a == b);
console.log(a === b);







