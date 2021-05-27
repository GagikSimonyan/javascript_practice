// TASK 28 PAGE 83

let n = +prompt('Enter n', '');
let p = +prompt('Enter p', '');
let a = +prompt('Enter a', '');
let s = 0;
let y = 1;

for (let m = 1; m <= n; m++) {
  for (let k = 0; k <= p; k++) {
    s = s + a * (m + k);
  }
  y = y * m ** 2 + s
}
console.log(y);



// TASK 29 PAGE 83

let n = +prompt('Enter a number', '');

prime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i / 2; j++) {
    if (i % j === 0) {
      continue prime;
    }
  }
  console.log(`${i} is prime`);
}



// TASK 30 PAGE 83

let n = +prompt('Enter n', '');
let m = +prompt('Enter m', '');

f1: for (let i = n; i <= m; i++) {
  f2:for (let j = 2; j <= Math.sqrt(i); j++) {
    let a = i;
    while (a !== 1) {
      if (a % j !== 0) {
        continue f2;
      } else {
        a = a / j;
      }
    }
    console.log(i);
    continue f1;
  }
}
