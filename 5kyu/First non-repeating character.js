// First non-repeating character
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// My Solution

function firstNonRepeatingLetter(s) {
  if (s.length <= 1) return s;
  else {
    a = s.split("").filter((a) => {
      return (
        s.toLowerCase().indexOf(a.toLowerCase()) ===
        s.toLowerCase().lastIndexOf(a.toLowerCase())
      );
    });
  }
  return a.length > 0 ? a[0] : "";
}

// Best solution
const firstNonRepeatingLetter = (s) =>
  s[
    [...s.toLowerCase()].findIndex(
      (c, _, s) => s.indexOf(c) === s.lastIndexOf(c)
    )
  ] || "";
