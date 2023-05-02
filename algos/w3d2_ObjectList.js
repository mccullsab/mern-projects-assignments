/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const items = [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'John', lastName: 'Smith', age: 25 },
    { firstName: 'Bob', lastName: 'Smith', age: 27 },
    { firstName: 'Bob', lastName: 'White', age: 31 },
];

const searchCriteria4 = {
    firstName: 'Bob',
    age: 31,
};
const expected4 = [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'Bob', lastName: 'White', age: 31 },
];

const searchCriteria5 = {
    lastName: 'Smith',
};
const expected5 = [
    { firstName: 'John', lastName: 'Smith', age: 25 },
    { firstName: 'Bob', lastName: 'Smith', age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */

function findObjects(searchCriteria, objectList) {
    // we use the filter method to return only the objects that match our search criteria.
    return objectList.filter((object) => {
        //our callback function checks if the value of the key in the searchCriteria object matches the value of the same key in the current object we're iterating through.
        return Object.keys(searchCriteria).every((key) => {
            return object[key] === searchCriteria[key];
        });
    });
}
console.log(findObjects(searchCriteria4, items))
console.log(findObjects(searchCriteria5, items))


/**
 * - Time: O(?).
 * - Space: O(?).
 */
function findObjectsFunctional(criteria, collection) { }
/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

const students = [
    {
        id: 1,
        name: 'student1',
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: 'student2',
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: 'student3',
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
    id: 3,
    name: 'student3',
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: 'randomValue',
};
const expected2 = {
    id: 1,
    name: 'student1',
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
};
/* 
  Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated
*/

const id3 = 5;
const updateData3 = {};
const expected3 = null;

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedVals Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */


function updateObjectById(id, updateObject, objectList) {
    const updatedObject = objectList.find(obj => obj.id === id);
    if (!updatedObject) {
        return null;
    }
    const keysToUpdate = Object.keys(updateObject).filter(key => updatedObject.hasOwnProperty(key));
    const updatedFields = {};
    for (let i = 0; i < keysToUpdate.length; i++) {
        updatedFields[keysToUpdate[i]] = updateObject[keysToUpdate[i]];
    }
    return { ...updatedObject, ...updatedFields };
}

console.log(updateObjectById(id1, updateData1, students));
console.log(updateObjectById(id2, updateData2, students));
console.log(updateObjectById(id3, updateData3, students));