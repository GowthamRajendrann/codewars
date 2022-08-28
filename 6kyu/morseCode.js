// Decode the morse code

//My Solution
decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split("   ")
    .map((item) => {
      return item
        .split(" ")
        .map((i) => MORSE_CODE[i])
        .join("");
    })
    .join(" ");
};
