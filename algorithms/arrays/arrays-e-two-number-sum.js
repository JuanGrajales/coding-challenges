/* 
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.

  Example:
  const array = [3, 5, -4, 8, 11, 1, -1, 6]
  const targetSum = 10

  output -> [-1, 11]
 */

// Solution 1
function twoNumberSum(array, targetSum) {
  const seenInts = new Set();

  // O(n) time complexity since we just loop through length of the array
  // O(n) space complexity since in the worst case we store the entired array in the setf
  for (let int of array) {
    const complement = targetSum - int;

    if (seenInts.has(complement)) {
      return [int, complement];
    }

    seenInts.add(int);
  }

  return [];
}
