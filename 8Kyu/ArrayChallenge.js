// This is a challenge from eloquent javscript.com about correlation calculation
// https://eloquentjavascript.net/04_data.html

let JOURNAL = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    angry: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    angry: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    angry: true,
  },
];
function addEntry(events, angry) {
  JOURNAL.push({ events, angry });
}
addEntry(["office", "pizza", "break", "peanuts", "beer"], true);

/*To compute the measure of correlation between two Boolean variables, we can use the phi coefficient (ϕ). 
This is a formula whose input is a frequency table containing the number of times the different combinations of 
 the variables were observed. The output of the formula is a number between -1 and 1 that describes the correlation.*/

/*  We’ll interpret the indices to the array as two-bit binary numbers, where the leftmost (most significant) 
digit refers to the squirrel variable and the rightmost (least significant) digit refers to the event variable*/

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

function tableFor(event, journals) {
  let table = [0, 0, 0, 0];
  for (journal of journals) {
    index = 0;
    if (journal.events.includes(event)) {
      index += 1;
    }
    if (journal.angry) {
      index += 2;
    }
    table[index] += 1;
  }
  return table;
}
console.log(tableFor("pizza", JOURNAL));

// function journalEvents(journal) {
//   let events = [];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i];
//     for (let e of entry.events) {
//       if (!events.includes(e)) {
//         events.push(e);
//       }
//     }
//   }
//   return events;
// }
function journalEvents(journals) {
  let events = [];
  for (let entry of journals) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}
