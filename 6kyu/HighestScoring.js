// // Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//My Solution
function high(x) {
  return x.split(" ").reduce((acc, item) => {
    let k = acc[1] || 0;
    let l = item.split("").reduce((acc, item) => {
      return (acc += "abcdefghijklmnopqrstuvwxyz".indexOf(item) + 1);
    }, 0);
    if (k < l) {
      return [item, l];
    }
    return acc;
  }, [])[0];
}

//Best Solution
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
