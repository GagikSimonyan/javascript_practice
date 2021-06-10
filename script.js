// let matrix = [];
// let n = 4;
// let m = 5;
// for (let i = 0; i < n; i++) {
//   matrix[i] = [];
//   for (let j = 0; j < m; j++) {
//     matrix[i][j] = Math.floor(Math.random() * 21) - 10;
//   }
// }

// console.log(matrix);



// TASK 38 page 118

// let sum = 0;
// let average = 0;
// let count = 0;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (matrix[i][j] > 0) {
//             sum += matrix[i][j];
//             count += 1;
//         }
//     }
// }
// console.log(sum);
// console.log(count);
// if (count > 0) {
//     average = sum / count;
//     console.log(average);
// } else {
//     console.log(average);
// }



// TASK 39 page 120

// let min = matrix[0][0];
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (matrix[i][j] < min) {
//             min = matrix[i][j];
//         }
//     }
// }
// console.log(min);



// TASK 40 page 121

// let k = 1;
// first:for (let i = 0; i < n - 1; i++) {
//  second:for (let j = i + 1; j < n; j++) {
//     for (let p = 0; p < m; p++) {
//       if (p === k) {
//         if (matrix[i][p] > matrix[j][p]) {
//             continue second;
//         } else {
//             let z = matrix[i][p];
//             matrix[i][p] = matrix[j][p];
//             matrix[j][p] = z;
//             continue second;
//         }
//       }
//     }
//   }
// }



// TASK 41 page 123

// for (let i = 0; i <= n; i++) {
//   let k = 0;
//   for (let j = k + 1; j < n; j++) {
//       if (matrix[j][i] < matrix[k][i]) {
//         k = j;
//     }
//   }
//   let min = matrix[k][i];
//   console.log(`the min value of column ${i} is ${min}`);
// }



// TASK 42 page 124

// let arr = [];
// for (let i = 0; i < n; i++) {
//   let count = 0;
//   for (let j = 0; j < m; j++) {
//       if (matrix[i][j] > 0) {
//         count += 1;
//     }
//   }
//   arr.push(count);
// }
// console.log(arr);



// TASK 43 page 124

// let matr = [
//   [-5, 1, -9, -2],
//   [9, 7, 4, 2],
//   [2, 5, -1, 7],
//   [6, 7, -7, 3],
// ]

// label: for (let i = 0; i < n; i++) {
//   let sum = 0;
//   for (let j = 0; j < m - 2; j++) {
//     if (matr[i][j] > matr[i][j + 1]) {
//       sum += matr[i][j];
//     } else {
//       continue label;
//     }
//   }
//   console.log(`The sum of row ${i} is ${sum}`);
// }