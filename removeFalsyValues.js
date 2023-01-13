// Remove falsy values from any array


let arr = ['🥰', false, 'Zishan', '❤️', NaN, undefined, '💕', null, 0, ''];

let newArr = arr.filter(Boolean);
console.log(newArr);
