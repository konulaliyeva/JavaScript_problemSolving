let n = Number(prompt("Enter your input: "));
let hashPattern = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    hashPattern += "#";
  }
  hashPattern += "\n";
}
console.log(hashPattern);
