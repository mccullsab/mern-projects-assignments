/* 
  Given an array of objects, a searchFor string, and searchBy key that exists
  in the object return a new array of only those objects whose value for the
  given key starts with the given search string.
  You can assume the key will exist on the object and the value of that key
  will be a string.
  Bonus: make the search case insensitive.
  Bonus: re-write it with functional programming, using built in methods.
  Bonus: allow the search method to be provided as a parameter, e.g.,
      string methods: includes, startsWith, endsWith.
    - you can assume the searchMethod will be valid.
  This kind of algorithm can be used in react onChange as you type into a
  search bar to live-filter a list.
*/
const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
];


function filterByKeyStartsWith(arr, searchFor, searchBy, searchMethod = 'startsWith') {
    //filter through the array using the built-in filter method and return a new array of objects whose value for the given key starts with the given search string
    //to make the search case insensitive modified the function to lowercase
    return arr.filter(obj => obj[searchBy].toLowerCase()[searchMethod](searchFor.toLowerCase()));
}

/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]
    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]
    return a new array of the names of people (not friends) who are at high risk of infection
    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: 'Friend',
    lastName: 'One',
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: 'Friend',
    lastName: 'Two',
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: 'Friend',
    lastName: 'Three',
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: 'Person',
        lastName: 'One',
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: 'Person',
        lastName: 'Two',
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: 'Person',
        lastName: 'Three',
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

const expected = ['Person One', 'Person Three'];


function coronaVirusAtRisk(people) {
    const highRiskNames = [];
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        if (!person.isSocialDistancing) {
            for (let j = 0; j < person.friends.length; j++) {
                const friend = person.friends[j];
                if (!friend.isSocialDistancing && friend.hasCovid) {
                    highRiskNames.push(`${person.firstName} ${person.lastName}`);
                    break;
                }
            }
        }
    }
    return highRiskNames;
}
console.log(coronaVirusAtRisk(people))



/**
 * - Time O(?).
 * - Space O(?).
 */
function coronaVirusAtRiskFunctional(persons) { }


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = 0; j < nums.length; j++) {
            sum += nums[i] + nums[j]
            if (sum === target) {
                newArr.push(i, j)
                return newArr
            }
            else {
                sum = 0
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9))