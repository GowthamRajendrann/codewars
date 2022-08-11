// Calculating with function
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

//My solution
function calcNumber(a, b) {
  if (a.length > 1) {
    return Math.floor(eval(b + a));
  }
  return b;
}
function zero(a = 1) {
  let b = "0";
  return calcNumber(a, b);
}
function one(a = 1) {
  let b = "1";
  return calcNumber(a, b);
}
function two(a = 1) {
  let b = "2";
  return calcNumber(a, b);
}
function three(a = 1) {
  let b = "3";
  return calcNumber(a, b);
}
function four(a = 1) {
  let b = "4";
  return calcNumber(a, b);
}
function five(a = 1) {
  let b = "5";
  return calcNumber(a, b);
}
function six(a = 1) {
  let b = "6";
  return calcNumber(a, b);
}
function seven(a = 1) {
  let b = "7";
  return calcNumber(a, b);
}
function eight(a = 1) {
  let b = "8";
  return calcNumber(a, b);
}
function nine(a = 1) {
  let b = "9";
  return calcNumber(a, b);
}

function plus(a) {
  return "+" + a;
}
function minus(a) {
  return "-" + a;
}
function times(a) {
  return "*" + a;
}
function dividedBy(a) {
  return "/" + a;
}

//Best Practices
var n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
  return function (l) {
    return l + r;
  };
}
function minus(r) {
  return function (l) {
    return l - r;
  };
}
function times(r) {
  return function (l) {
    return l * r;
  };
}
function dividedBy(r) {
  return function (l) {
    return l / r;
  };
}
