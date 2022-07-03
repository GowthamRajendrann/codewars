// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My solution
const reverseSeq = (n) => {
  if (n > 0) {
    return Array.from({ length: n }, (_, number) => number + 1).reverse();
  }
};

const reverseSeq1 = (n) => {
  let reversesequence = [];
  if (n > 0) {
    for (let i = n; i > 0; i--) {
      reversesequence.push(i);
    }
  }
  return reversesequence;
};
