let n = Number(prompt("Enter your input: "));
let starPattern = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    starPattern += " *";
  }
  starPattern += "\n";
}
console.log(starPattern);
