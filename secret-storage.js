/**
 *    * THIS IS A SIMPLE EXAMPLE OF HOW WE CAN STORE A "PRIVATE"
 *    * VARIABLE IN A FUNCTION'S CLOSURE AND USING RECURSION AND
 *    * CURRYING WE CAN MAKE IT SUPER THROUGHOUT A WHOLE APPLICATION
 *
 *    @param {array} array an array to be stored if with in closure it is
 *    empty it will initialize
 *    an empty array if not it will add to the array provided
 *    --> TLDR: below we are using the  default parameter syntax
 *    @return (arg, done) => this is a new function
 *    @param {any} arg  if arg is not null it will inserted into the array
 *    at position zero
 *    @param {function} done this is to be callback to be executed on the
 *    array
 **/

const storeSecretArray = (array = []) => (arg, done) => {
	if (arg !== null) array = [arg, ...array]
	return !!done ? done(array) : storeSecretArray()
}

/**
 * *this commented out function is the same as storeSecretArray
 * function storeArray (array = []) {
 *    return function (arg, done) {
 *       if(arg !== null) array = [arg, ...array]
 *       if(!! done) return done(array)
 *       return storeArray()
 *    }
 * }
 **/

/**
 *   @here are some of basic functions to illustrate our callbacks
 *   @param done takes a function callback
 **/

const logIt = it => console.log(it)

/**
 * @here notice that we are using currying here
 * the reason we curry this function is the way that it will be called in
 * @function storeSecretArray if we call it with our string first its
 * @return value is a function that takes an array which is what we pass as
 * the callback.
 * @param {string} thing this is the thing to be removed
 * @param {array} array this is the array that we will filter through.
 */

const removeTheThing = thing => array => {
	return array.filter(item => item !== thing)
}

const addSecret = storeSecretArray() //?
addSecret('party')
addSecret('tim') //?
addSecret('tam') //?
addSecret('tom', logIt)
addSecret('tim', logIt)
const noMoreTims = addSecret('tam', removeTheThing('tim')) //?
addSecret(null, logIt)
