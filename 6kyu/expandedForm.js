// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//My Solution
function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, item, index, arr) => {
      if (index < arr.length - 1 && item > 0) {
        return [...acc, item + "0".repeat(-index - 1 + arr.length)];
      } else {
        if (item > 0) {
          return [...acc, item];
        }
        return acc;
      }
    }, [])
    .join(" + ");
}

//Best Solution
const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");
