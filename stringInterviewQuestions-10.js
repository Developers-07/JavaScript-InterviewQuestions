// convert string in only one array


let str = "Hello, How are you";
console.log(str.split());
console.log(str.split(''));
console.log([str]);
console.log([...str]);


// replace any character

console.log(str.replace(/H/g, '_'));


// get substring from string

console.log(str.substring(7, 10));


// remove first character

console.log(str.substring(1, str.length));


// remove last character

console.log(str.substring(0, str.length - 1));


// remove string before specific character

let temp = str.split('o');
console.log(temp);
console.log(temp[0]);


// reverse a string

let rev = str.split('').reverse().join("");
console.log(rev);


// remove extra space from both side

let naam = '  Zishan Kabir Chowdhury     ';
console.log(naam.trim());


// remove space from left side and right side 

let n = " HI";
let n2 = "Hello ";

console.log(n.trimStart());
console.log(n2.trimEnd());