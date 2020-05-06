// Given a number K and string S of digits denoting a positive integer, build the largest number possible by performing swap operations on the digits of S at-most K times.

// Input:
// The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. The first line of each test case contains a positive integer K. The second line of each test case contains a string of digits denoting a positive integer.

// Output:
// Print out the largest number possible.

// Constraints:
// 1 <= T <= 100
// 0 <   S <= 30
// 0 <   K  <= 10

// Examples :
// Input:
// 3
// 4
// 1234567
// 3
// 3435335
// 2
// 1034

// Output:
// 7654321
// 5543333
// 4301

// Explanation:
// Test-case 1: Three swaps can make the input 1234567 to 7654321, swapping 1 with 7, 2 with 6 and finally 3 with 5.
const swapKs = (k, string) => {
	string.split().map((num, index) => {
		if (num <= string[index + 1]) {
			return num //?
		} else if (num > string[index + 1]) {
			let temp = num
			return num //?
		}
	})
	if (k <= 0) {
		return k
	}
	k--
	return swapKs(k, string)
}
swapKs(2, '1324') //?
