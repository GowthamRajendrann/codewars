// Sum of Digital roots

/* My solution*/
function digital_root(n) {
  number = String(n)
    .split("")
    .map(Number)
    .reduce((a, i) => a + i, 0);
  while (number > 9) {
    number = String(number)
      .split("")
      .map(Number)
      .reduce((a, i) => a + i, 0);
  }
  return number;
}

/* Best Solution*/
function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}
