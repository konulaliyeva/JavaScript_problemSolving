let binary = prompt("Enter your input: ");
let decimalNumber = 0;
let power = 0;
for (let i = binary.length - 1; i >= 0; i--) {
  let digit = Number(binary[i]);
  decimalNumber += digit * Math.pow(2, power);
  power++;
}
console.log(
  `The decimal equivalent of a binary number ${binary} is ${decimalNumber}`
);
