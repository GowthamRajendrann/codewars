//My Solution
function titleCase(title, minorWords = []) {
  let minor = minorWords.split(" ").map((item) => item.toLowerCase());
  let capTitle = title
    .split(" ")
    .reduce((acc, item) => {
      return (
        acc + " " + item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
      );
    }, "")
    .trim();
  return minorWords.length === 0 ? capTitle : mTitle(capTitle, minor);
}

function mTitle(title, minor) {
  return title.split(" ").reduce((acc, item, index) => {
    if (index === 0) {
      return acc + " " + item;
    }
    if (minor.includes(item.toLowerCase())) {
      return acc + " " + item.toLowerCase();
    }
    return acc + " " + item;
  }, "");
}
