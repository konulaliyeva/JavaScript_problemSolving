let n = Number(prompt("Enter your input: "));
let sigma = 0;
for (let k = 1; k <= n; k++) {
  sigma = sigma + Math.pow(-1, k + 1) / (2 * k - 1);
}
console.log(4 * sigma);
