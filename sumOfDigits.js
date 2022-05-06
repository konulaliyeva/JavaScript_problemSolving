let n = Number(prompt("Enter your input: "));
let sumOfDigits = 0;
while (n > 0) {
  let lastDigit = n % 10;
  sumOfDigits += lastDigit;
  n = parseInt(n / 10);
}
console.log(`The sum of digits is ${sumOfDigits}`);
