/* 
Given by Riot games.
*/

const str10 = 'b70a164c32a20c10';
const expected10 = 'a184b70c42';

const str20 = 'd20a47b25b25a33c60d50'
const expected20 = 'a80b50c60d70'


function rehash(str) { 
    // keep track of the count
    let letterCount = {};
    let currentLetter = '';
    let countString ='';
    // loop through each char
    for(let i=0;i<str.length; i++){
        let char = str.charAt(i);
        // if the char is letter, add it to the current letter string
        if(/[a-zA-Z]/.test(char)){
            currentLetter+=char;
        }
        // if char is number att to countr string
        if(/[0-9]/.test(char)){
            countString+=char;
            // if the function reaches the end of the countr string, the nxt char is a letter
            if( i===str.length-1 || /[a-zA-Z]/.test(str.charAt(i+1))){
                // add current letter and (|| 0) resets the current letter
                letterCount[currentLetter] = letterCount[currentLetter] || 0;
                letterCount[currentLetter] += parseInt(countString);
                currentLetter = '';
                countString ='';
            }
        }
        
    }
    // sort the letters alphabetically 
    const sortedLetters = Object.keys(letterCount).sort();
    let reHashed = '';
    // loop through the sorted letters and their counts and concat into a rehashed string
    sortedLetters.forEach(letter => {
        reHashed += letter+letterCount[letter];
    });
    return reHashed;
}

console.log(rehash(str10));
console.log(rehash(str20));


// empty obj called lettercount to keep track of dupes
// 


// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = 'abcabcbb';
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = 'bbbbb';
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = 'pwwkew';
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = 'dvadf';
const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {
    let maxLength = 0;
    // starting index of current substring
    let start = 0;
    // keep track of most recent index of each character in the substring
    let charMap = {};
    // loop through each char
    for(let i=0; i<str.length; i++){
        const char = str.charAt(i);
        // if char has been seen before, update start to be index of last occurance of char
        // ensures substring does not have repeating characters
        if(charMap[char] >= start){
            start = charMap[char] + 1;
        }
        // update charMap w current char and its index
        charMap[char] = i;
        // update maxlength if the current substring is longer than the previous substring
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubString(str1))
console.log(lengthOfLongestSubString(str2))
console.log(lengthOfLongestSubString(str3))
console.log(lengthOfLongestSubString(str4))