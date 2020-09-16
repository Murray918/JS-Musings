const stringArray = [
  "ccooddddddewwwaaaaarrrrsssss",
  "piccaninny",
  "hubbubbubboo",
];

function dup(stringArray, arrayMutated = []) {
  const regex = /(.)\1+/g;
  let chars = stringArray.shift().replace(regex, "$1"); //?
  arrayMutated.push(chars);
  while (!!stringArray.length) dup(stringArray, arrayMutated);
  return arrayMutated; //?
}

dup(stringArray); //?
