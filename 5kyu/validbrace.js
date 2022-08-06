// Valid Braces
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100\

// My Solution
function validParentheses(parens) {
  let collector = [];
  parens = parens.split("");
  for (item of parens) {
    if (item === "(") {
      collector.push(item);
    } else {
      if (collector.length === 0) return false;
      if (collector[collector.length - 1] === "(" && item === ")") {
        collector.pop();
      } else {
        break;
      }
    }
  }
  return collector.length === 0;
}

//Best Solution
function validParentheses(parens) {
  var indent = 0;

  for (var i = 0; i < parens.length && indent >= 0; i++) {
    indent += parens[i] == "(" ? 1 : -1;
  }

  return indent == 0;
}
