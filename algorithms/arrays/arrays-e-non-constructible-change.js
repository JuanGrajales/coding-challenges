/*
  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).


 */

// Solution 1
function nonConstructibleChange(coins) {
  // Write your code here.

  // O(1) space, to keep track of minChange
  let minChange = 0;

  // O(nlogn) time, for sorting
  coins.sort((a, b) => a - b);

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > minChange + 1) {
      break;
    }

    minChange += coins[i];
  }

  return minChange + 1;
}
