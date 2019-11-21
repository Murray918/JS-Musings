function pipe(...fns) {
	return function(initialValue) {
		return fns.reduce((acc, curr) => {
			return curr(acc) //?
		}, initialValue)
	}
}

const double = x => x * 2
const square = x => x * x
const plus3 = x => x + 3

pipe(double, square, plus3)(5) //?


/**
 * 
 * @param  {...function} fns an array of synchronous or asynchronous functions.
 *  
 * @return { function } the initial call of asyncPipe returns a function that takes an initial value. The function argument passed in @param args are strored with closure 
 * 
 * @param { any } input takes any value. this will be input to the first function in the fns argument
 * 
 * @return { any } the return value of each function and the starting with input argument, and moving from left to right in the fns array. 
 * 
 */

function asyncPipe(...fns) {
	return input => {
		return fns.reduce(
			(chain, func) => chain.then(func), //?
			Promise.resolve(input)
		)
	}
}

const waitPlus3 = x =>
	new Promise(resolve => setTimeout(() => resolve(x + 3), 100)) //?
const waitSquare = x =>
	new Promise(resolve => setTimeout(() => resolve(x * x), 300)) //?
const waitDouble = x =>
	new Promise(resolve => setTimeout(() => resolve(x * 2), 400)) //?

asyncPipe(
	waitDouble,
	waitSquare,
	waitPlus3
)(5) //?
	.then(total => ` : the total is ${total}`)
	.catch(error => new Error(error)) //?

//functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
