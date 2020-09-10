function asyncComposeTypes<T>(...fns) {
  return function (chainedValue: T) {
    return fns.reduceRight((chain, fn) => {
      return chain.then(fn); // ?
    }, Promise.resolve(chainedValue)); // ?
  }; //?
}

const waitPlus4 = (x: number): Promise<Number> =>
  new Promise((resolve) => setTimeout(() => resolve(x + 4), 1000)); //?

const waitThenSquare = (x: number): Promise<Number> =>
  new Promise((resolve) => setTimeout(() => resolve(x * x), 300)); //?

const waitThenDouble = (x: number): Promise<Number> =>
  new Promise((resolve) => setTimeout(() => resolve(x * 2), 400)); //?

try {
  asyncComposeTypes(waitThenDouble, waitThenSquare, waitPlus4)(5); //?
} catch (error) {
  console.error(error);
}
