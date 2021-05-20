
// TASK 23

let n = +prompt("Enter a number", "");
while (n) {
  let digit = n % 10;
  console.log(digit);
  n = Math.floor(n / 10);
}



// TASK 24

let n = 153;
let m = n;
let p = 0;

while (m) {
  let d = m % 10;
  if (d >= 5) {
    console.log(`n = ${n}`);
    break;
  }
  else {
    p = p * 10 + d * 2;
    console.log(`p = ${p}`);
  }
  m = Math.floor(m / 10);
}



// TASK 1 page 72

let y = 0;
for (let x = 1; x <= 8; x += 0.2) {
    if (x < 5)  y = 2 * x + 1
    else y = (x * x) - 1
}
console.log(y);



// TASK 2 page 72

let y = 0;
let z;
for (let x = 1; x <= 12; x += z) {
    if (x < 3) {
        y = 5 * x + 2
    } else if (x <= 10 && x >= 3) {
        y = (x * x) + x - 1
    }
    else {
        y = 1
    }
}
console.log(y);



// TASK 3 page 72

let n = +prompt("Enter a number", "");
let s = 0;

for (let i = 1; i <= n; i++) {
    s = s + Math.sin(i)/Math.cos(i);
}
console.log(s);