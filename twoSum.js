/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 105
    -109 <= nums[index] <= 109
    -109 <= target <= 109
    Only one valid answer exists.


 * 
 * 
 * @param {number[]} nums number of candidates who's sum must equal the target
 * @param {number} target target number
 * @return {number[]} the indexes of the array values of whom sum equals the target 
 */
const twoSum = function (nums, target) {
  const exist = {}; //?
  let index = 0;

  for (const num of nums) {
    exist;
    //this cancels out numbers from our cache
    if (typeof exist[target - num] !== "undefined") {
      return [exist[target - num], index];
    }
    // flipflop the index with the value from nums and cache
    exist[num] = index;
    index++;
  }
};
// twoSum([4, 3, 2, 1, 5, -1], 6); //?
twoSum([2, -6, 11, 15], 9); //?
