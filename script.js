function factorial(n){
  if(n == 0 || n == 1){
      return 1;
  }else{
      return n * factorial(n - 1);
  }
}


// TASK 2 PAGE 92

let n = +prompt('Enter an n', '');
let m = +prompt('Enter an m', '');
let s = 0;

for (let i = n; i <= m; i++) {
    s += i ** i;
}
console.log(s);



// TASK 3 PAGE 92

let n = +prompt('Enter a number', '');
let s = 0 ;
let p = 1;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        p = p * (i + 1) * (i + j ** 2);
    }
    s += p;
}
console.log(s);



// TASK 4 PAGE 92

let n = +prompt('Enter n', '');
let x = +prompt('Enter x', '');
let s = 0 ;

for (let i = 1 ; i <= n; i++){
   s = s + ((i ** i) * (x ** i) / factorial(i))
}
console.log(s);



// TASK 5 PAGE 92

let n = +prompt('Enter a number', '');
let s = 0;
let y = 1 / factorial(n);

for (let k = 1; k <= n; k++) {
    let z = factorial(2 * (k ** 2) + 1);
    s = y + ((-1) ** k) * z;
}
console.log(s);