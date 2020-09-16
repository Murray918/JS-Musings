/**
 * A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.
 *
 * In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
 *
 * For example an extract of a stocklist could be:
 *
 * L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
 * or
 * L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
 *
 * You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :
 *
 * M = {"A", "B", "C", "W"}
 * or
 * M = ["A", "B", "C", "W"] or ...
 *
 * and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.
 *
 * For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):
 *
 *   (A : 20) - (B : 114) - (C : 50) - (W : 0)
 *
 * where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.
 *
 * If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).
 */

// we could use regex to get these values seperated from eachother

// we need the first character form the Letters and and the whole number parsed

function stockList(listOfArt, listOfCat) {
  const store = listOfArt.reduce((acc, curr, index) => {
    const [code, currentNumberString] = curr.split(" ");
    const category = code[0];
    const currentIntValue = parseInt(currentNumberString);

    if (listOfCat.some((cat) => category === cat)) {
      if (acc[category]) {
        acc[category] += currentIntValue;
      } else {
        acc[category] = currentIntValue;
      }
    }
    return acc;
  }, {});

  return formatObjectToFormattedString(store);
}

function stockList2(listOfArt, listOfCat) {
  const bookStore = listOfCat.reduce(
    (store, cat) => ({ [cat]: 0, ...store }),
    []
  ); //?

  listOfArt.forEach((book) => {
    const [code, number] = book.split(" ");
    const cat = code[0];
    if (typeof bookStore[cat] !== "undefined") {
      bookStore[cat] += parseInt(number);
    }
  });
  return formatObjectToFormattedString(bookStore); //?
} //?

function formatObjectToFormattedString(object) {
  if (!Object.values(object).every((number) => number === 0 )) return ""; //?
  return Object.entries(object)
    .sort(([a], [b]) => a - b)
    .reverse() //?
    .map(([cat, books], index, originalArray) =>
      index < originalArray.length - 1
        ? `(${cat} : ${books}) - `
        : `(${cat}, ${books})`
    )
    .join("");
}

b = ["ABAR 0", "CDXE 000", "BKWR 0", "BTSQ 0", "DRTY 00"];
c = ["A", "B"];
res = "(A : 200) - (B : 1140)";
console.assert(stockList2(b, c), res);

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
c = ["A", "B", "C", "W"];
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)";
console.assert(stockList2(b, c), res);
