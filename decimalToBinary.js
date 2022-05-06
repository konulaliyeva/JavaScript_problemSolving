let decimal = Number(prompt("Enter your input: "));
let input = decimal;
let binaryNumber = "";
let reversedBinaryNumber = "";
while (decimal >= 1) {
  let digit = decimal % 2;
  if (digit === 0 || digit === 1) {
    binaryNumber += digit;
    decimal = parseInt(decimal / 2);
  }
}
for (let i = binaryNumber.length - 1; i >= 0; i--) {
  reversedBinaryNumber += binaryNumber[i];
}

console.log(`The equivalent of ${input} is ${reversedBinaryNumber}`);
