/*
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  Example:
  const array = [1, 2, 3, 5, 6, 8, 9]

  result -> [1, 4, 9, 25, 36, 64, 81]
 */

// Solution 1
function sortedSquaredArray(array) {
  const lastIndex = array.length - 1;
  const orderedArray = new Array(array.length);
  let endPointer = lastIndex;
  let startPointer = 0;

  // Since the array is in ascending order and
  // negative values are allowed you can have
  // the following: [-10, -5, 0, 5, 10]
  // So once we square the values the lowest
  // negative value can become the highest.
  // Therefore we use two pointers starting
  // at the end and start of the array and compare
  // the values. The highest value will get added to
  // the orderedArray. Add the values starting
  // from the end to the start.

  // O(n) time complexity since we just loop through the array
  // O(n) space complexity since we create a new array on the same length
  for (let i = lastIndex; i >= 0; i--) {
    const startValue = array[startPointer] ** 2;
    const endValue = array[endPointer] ** 2;

    if (startValue < endValue) {
      orderedArray[i] = endValue;
      endPointer--;
    } else {
      orderedArray[i] = startValue;
      startPointer++;
    }
  }
  return orderedArray;
}
