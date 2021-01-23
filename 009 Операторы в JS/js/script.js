"use strict";

console.log('arr' + " - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(5%2);

console.log((typeof(2*4) == typeof('8'))); // сравнение только по значению
console.log((typeof(2*4) == typeof(8)));  // сравнение по значению и типу данных одновременно


// &&
// ||

const isChecked = true,
      isClose   = false;

console.log(isChecked && isClose);


const isChecked = true,
      isClose   = false;

console.log(isChecked || isClose);