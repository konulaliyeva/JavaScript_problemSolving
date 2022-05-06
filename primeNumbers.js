let n = Number(prompt("Enter your input: "));

let count = 0;
for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j <= i; j++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime === true) {
    console.log(`${i} is a prime number`);

    count++;
  }
}
console.log(`Total count of prime numbers till ${n} is ${count}`);
