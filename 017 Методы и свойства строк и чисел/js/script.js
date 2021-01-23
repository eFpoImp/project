"use strict";

const str = "teSt";
const arr = [1, 2, 3];

console.log(str);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());


let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));


const logg = "Hello World!";
console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));