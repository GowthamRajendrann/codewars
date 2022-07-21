// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false.

/*My Solution*/
function XO(str) {
  strLower = str.toLowerCase();
  positionx = 0;
  countx = 0;
  positiony = 0;
  county = 0;
  while (true) {
    finalPositionx = strLower.indexOf("x", positionx);
    if (finalPositionx < 0) {
      break;
    }
    positionx = finalPositionx + 1;
    ++countx;
  }
  while (true) {
    finalPositiony = strLower.indexOf("o", positiony);
    if (finalPositiony < 0) {
      break;
    }
    positiony = finalPositiony + 1;
    ++county;
  }
  return countx === county ? true : false;
}

/*Best Solution*/
const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};

function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
