let hexadecimal = prompt("Enter your input: ");
let power = 0;
let decimalNumber = 0;
let digit;
for (let i = hexadecimal.length - 1; i >= 0; i--) {
  digit = hexadecimal[i];

  if (digit === "A") digit = "10";
  else if (digit == "B") digit = "11";
  else if (digit == "C") digit = "12";
  else if (digit == "D") digit = "13";
  else if (digit == "E") digit = "14";
  else if (digit == "F") digit = "15";

  digit = Number(digit);

  decimalNumber += digit * Math.pow(16, power);
  power++;
}
console.log(`The decimal equivalent of ${hexadecimal} is ${decimalNumber}`);
