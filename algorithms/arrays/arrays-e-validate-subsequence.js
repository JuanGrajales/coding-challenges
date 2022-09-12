/*
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4],
  and so do the numbers [2, 4]. Note that a single number in an array and the 
  array itself are both valid subsequences of the array.

  Example:
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, 10]

  result -> true
 */

// Solution 1
function isValidSubsequence(array, sequence) {
  let lastIndex = 0;

  // O(n) time complexity since we just loop through length of the sequence
  // O(1) space complexity since we keep reusing the same lastIndex variable
  for (let num of sequence) {
    // Check if the number exist in the array
    const index = array.indexOf(num);

    // index < 0 checks that the integer is in the array
    // index < lastIndex check that the integer found is in the correct order
    if (index < 0 || index < lastIndex) {
      return false;
    }

    lastIndex = index;
    array.splice(index, 1);
  }

  return true;
}
