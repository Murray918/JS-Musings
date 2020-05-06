/**
 *
 * @param  {...Function} fns an infinite amount of functions
 */

function compose(...fns) {
	return function(initialValue) {
		fns.reduceRight((acc, curr) => {
			return curr(acc)
		}, initialValue)
	}
}

function asyncCompose( ...fns) {
	return function(chainedValue) {
		return fns.reduceRight((chain, fn) => {
			return chain.then(fn)
		}, Promise.resolve(chainedValue))
	}
}


// asynchronous mathematics
const waitPlus3 = x =>
	new Promise(resolve => setTimeout(() => resolve(x + 3), 100)) //?
const waitSquare = x =>
	new Promise(resolve => setTimeout(() => resolve(x * x), 300)) //?
const waitDouble = x =>
	new Promise(resolve => setTimeout(() => resolve(x * 2), 400)) //?

// synchronous mathematics
const double = x => x * 2
const square = x => x * x
const plus3 = x => x + 3



const sync = asyncCompose(double, waitDouble, waitDouble)(4)
    .then(result => {
        console.log(result)
        return result 
    }) 
    .catch(error => {
        console.error(error)
        throw new Error(error)
    }) 

async function todo(initialValue, ...things){
    try {
        const result = await asyncCompose(...things)(initialValue)
        return result / 2 //?
    } catch (error){
        return new Error(error)
    }
}

todo(4, double, waitDouble, waitDouble)//?

