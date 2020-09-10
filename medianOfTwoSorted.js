// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:

// Input: nums1 = [2], nums2 = []
// Output: 2.00000

const mod = (mod) => (num) => num % mod;
const isOdd = (num) => !!mod(2)(num); //?
const modTwo = (num) => mod(2)(num);

function findMedian(nums1, nums2) {
  const mergedAndSorted = [...nums1, ...nums2].sort((a, b) => a - b);
  const lastItems = removeOutsideItems([...mergedAndSorted]);
  if (!isOdd(lastItems.length)) {
    return (lastItems[0] + lastItems[1]) / 2;
  }
  return lastItems[0]; //?
}

function removeOutsideItems(array) {
  if (array.length <= 2) return array;
  array.shift();
  array.pop();
  return removeOutsideItems(array);
}

findMedian([1, 2], [3, 4]); //?
