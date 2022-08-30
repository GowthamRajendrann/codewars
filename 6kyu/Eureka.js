// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

//My Solution
function sumDigPow(a, b) {
  let k = b - a;
  return Array.from({ length: b - a }, (_, i) => a + i * 1).filter(isEureka);
}

function isEureka(value) {
  return (
    value ===
    value
      .toString()
      .split("")
      .reduce((acc, item, index) => {
        return (acc += Math.pow(item, index + 1));
      }, 0)
  );
}
