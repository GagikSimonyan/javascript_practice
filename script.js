// TASK 12

let n = +prompt('Enter a number', '');
let i = 1;
let s = 0;
while (i <= n) {
  s += i ** 2;
  i++;
}
console.log(`s = ${s}`);



// TASK 13

let i = +prompt('Enter a number', '');
let y = 1;
let k = 1;

while (k <=i) {
  y *= 2;
  k++;
}
console.log(`y = ${y}`);



// TASK 14

let a = +prompt('Enter a number', '');
let s = 0;
let i = 1;

while (s <= a) {
  s += i ** 2;
  i++;
}
console.log(`s = ${s}`);



// TASK 15

let n = +prompt('Enter a number', '');
let s = 0;
let z = 1;

for (let i = 1; i <= n; i++) {
  z *= 2;
  s += z;
}
console.log(`s = ${s}`);



// TASK 16

let n = +prompt('Enter a number', '');
let s = 0;
let h = 0;

for (let i = 1; i < n; i++) {
  h += Math.sin(i);
  s += i /h;
}
console.log(`s = ${s}`);


