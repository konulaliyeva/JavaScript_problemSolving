let n = Number(prompt("Enter your input: "));
let floydTriangle = "";
let k = 1;
for (let i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    floydTriangle += k + " ";
    k++;
  }
  floydTriangle += "\n";
}
console.log(floydTriangle);
