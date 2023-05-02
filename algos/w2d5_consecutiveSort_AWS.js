// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const numbers1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: numbers[0] + numbers[2] = 2 + 7 = 9. Return order doesn't matter.

const numbers2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const numbers3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];


function twoSum(numbers, targetSum) {
    let result = []
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] + numbers[i] === targetSum) {
                result.push(i, j);
            }
        }
    }
    return result;
}

console.log(twoSum(numbers1, targetSum1));
console.log(twoSum(numbers2, targetSum2));
console.log(twoSum(numbers3, targetSum3));



// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8
/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const numbers4 = [1, 1, 1, 2, 2, 3];
const k4 = 2;
const expected4 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements


const numbers5 = [0, 0, 0, 2, 2, 3];
const k5 = 1;
const expected5 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const numbers6 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k6 = 3;
const expected6 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * numbers.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
/**
 * - Time: O(n) + O(n) + O(n^2) + O(k) -> O(n^2) quadratic due to sort's worst
 *    case.
 * - Space: O(n) linear.
 */
function kMostFrequentSort(numbers, k) {
    const frequencies = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        if (frequencies.has(num)) {
            frequencies.set(num, frequencies.get(num) + 1);
        } else {
            frequencies.set(num, 1);
        }
    }

    const keys = [...frequencies.keys()];

    // sort gives us two elements side by side, A and B, a - b sorts ascending, b - a for descending
    keys.sort((numA, numB) => {
        const frequencyA = frequencies.get(numA);
        const frequencyB = frequencies.get(numB);
        return frequencyB - frequencyA;
    });

    // slice only the first k keys, if using a plain object for the freq table instead of the
    // built in Map object, would need to convert the keys back to ints, could do this with .map
    return keys.slice(0, k);
}