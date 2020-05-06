//lets make an async pipe function

let array = [1, 2, 3, 4, 5]

function* generator(array) {
	let localArray = [...array]
	while (localArray.length) {
		yield localArray.shift()
	}
}

console.log((item1 = generator(array).next().value))
array //?

