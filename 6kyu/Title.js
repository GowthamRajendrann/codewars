function titleCase(title, minorWords = '') {
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
    if (index === 0 || !minor.includes(item.toLowerCase())) {
      return acc + " " + item;
    }
      return acc + " " + item.toLowerCase();
  }, "").trim();
}


//Best Solution
function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}
