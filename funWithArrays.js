let array = [
  12,
  2,
  3,
  4,
  4,
  5,
  65,
  6,
  73,
  7,
  95,
  92,
  7,
  5,
  2,
  23,
  45,
  3,
  4,
  2,
  45,
  3,
  5,
  4,
  3,
];

let newSet = Array.from(new Set(array)); //?

function swapOuterValues(array) {
  let lastValue = array[array.length - 1];
  let firstValue = array[0];
  array[0] = lastValue;
  array[array.length - 1] = firstValue;
  return array; //?
}

function dynamicSwapArrayValues(value1, value2, array) {
  let value1Found;
  let value2Found;

  for (value of array) {
    if (value === value1) value1Found = value; //?
    if (value === value2) value2Found = value; //?
  }

  if (!value1Found || !value2Found) return "no values match arguments"; //?
  value2Found;
  value1Found;
  array.indexOf(value2Found); //?
  array[array.indexOf(value2Found)] = value1Found; //?
  array[array.indexOf(value1Found)] = value2Found; //?
  return array; //?
}

// swapOuterValues(newSet);

// dynamicSwapArrayValues(95, 45, newSet); //?

function swapFirstValueWithHighestPrecedingValue(array) {
  let mutations = [...array];
  let tempValue = mutations[0];

  for (let index = 0; index < mutations.length; index++) {
    if (mutations[index + 1] > tempValue) tempValue = mutations[index + 1]; //?
  }
  mutations[mutations.indexOf(tempValue)] = mutations[0];
  mutations[0] = tempValue;
  return mutations; //?
}

swapFirstValueWithHighestPrecedingValue([22, 1, 94, 65, 93]); //?

