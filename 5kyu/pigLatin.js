// PigLatin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My Solution
function pigIt(str) {
  w = str
    .split(" ")
    .reduce((acc, item) => {
      if (item.toLowerCase() !== item.toUpperCase()) {
        h = item.slice(1) + item[0] + "ay";
        acc.push(h);
        return acc;
      } else {
        acc.push(item);
        return acc;
      }
    }, [])
    .join(" ");
  return w;
}
