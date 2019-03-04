//@ts-check
const fs = require("fs");

const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const fizzBuzz = (max = 0) => {
  const log = [];
  for (let i = 1; i < max; i++) {
    let divisible = i + "";
    if (i % 3 === 0 && i % 5 === 0) {
      divisible = "FIZZBUZZ";
    } else if (i % 3 === 0) {
      divisible = "FIZZ";
    } else if (i % 5 === 0) {
      divisible = "BUZZ";
    } else if (isPrime(i)) {
      divisible = "FiZZBUZZ++";
    }
    console.log(i + ":" + divisible);
    log.push([i, divisible, "\n"]);
  }
  return log.join() + "\n";
};

fs.appendFile("fizzbuzz.log", fizzBuzz(500), err => {
  if (err) return console.log(err);
  console.log("Appended!");
});

//fizzBuzz(500)
