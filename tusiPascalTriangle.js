let n = Number(prompt("Enter your input: "));
let tusiPascalTriangle = "";
for (let i = 1; i <= n; i++) {
  let C = 1;
  for (let j = 1; j <= i; j++) {
    tusiPascalTriangle += C + " ";
    C = C * ((i - j) / j);
  }
  tusiPascalTriangle += "\n";
}
console.log(tusiPascalTriangle);
