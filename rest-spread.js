//Old version:
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
// ES2015:
function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0);
}

function findMin(...nums) {
    return nums.reduce((min, currNum) => min < currNum ? min : currNum);
}

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function doubleAndReturnArgs(arr, ...nums) {
    const doubleNums = nums.map(num => num*2);
    return [...arr, ...doubleNums];
}

const removeRandom = (items => {
    const randomIdx = Math.floor(Math.random()*items.length);
    return items.filter((item, key) => key != randomIdx);
})

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

const removeKey = (obj, key) => {
    const objCopy = {...obj};
    delete objCopy[key];
    return objCopy;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = addKeyVal;


