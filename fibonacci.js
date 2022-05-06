let n = Number(prompt("Enter your input: "));

let num1 = 0;
let num2 = 1;
let nextOne;

for (let i = 0; i <= n; i++) {
  console.log(num1);
  nextOne = num1 + num2;
  num1 = num2;
  num2 = nextOne;
}
