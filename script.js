// TASK 4 PAGE 73

let n = +prompt('Enter a number', '');
let x = +prompt('Enter an X', '');
let s = 0;

for (let i = 1; i <= n; i++) {
  s = s + Math.sin(i) * x;
}
console.log(`s = ${s}`);



// TASK 8 PAGE 73

let n = +prompt('Enter a number', '');
let x = +prompt('Enter an X', '');
let y = 1;
let k = 1;
let f = 1;

for (let i = 1; i <= n; i++) {
  y = y * ((Math.cos(i) * x) / k * f);
  k = k * 2;
  f = f * i;
}
console.log(`y = ${y}`);



// TASK 9 PAGE 73

let n = +prompt('Enter a number', '');
let y = 1;
let i = 0;

if (n % 2 === 0) i = 2;
else i = 1;

while (i <= n) {
  y = y * i;
  i = i + 2;
}
console.log(`y = ${y}`);



// TASK 10 PAGE 73

let a = +prompt('Enter a number', '');
let i = 1;
let b = Math.pow(4, i);

while (b < a) {
  i++;
  b = Math.pow(4, i);
}
console.log(`i = ${i}`);



// TASK 12 PAGE 73

let n = +prompt('Enter a number', '');
let s = 0;
while (n) {
  let d = n % 10;
  s = s + d;
  n = Math.floor(n / 10);
}
console.log(`s = ${s}`);



// TASK 13 PAGE 73

let n = +prompt('Enter a number', '');
while (n) {
  let d = n % 10;
  console.log(d)
  n = Math.floor(n / 10);
}