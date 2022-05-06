let n = Number(prompt("Enter your input: "));

let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`The factorial of ${n} is ${factorial}`);
