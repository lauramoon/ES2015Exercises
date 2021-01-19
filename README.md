# Section 10 Exercises

## 10.2 let and const Exercise
```javascript
var PI = 3.14; //ES5 version
const PI = 3.14; //ES2015 version
```

- var has function-level scope; let has block-level scope. var can be redeclared; let cannot.
- const scope is like let, not var. const can neither be redeclared nor reassigned; var can be both.
- let can be reassigned, but const cannot.
- hoisting is when the interpreter considers avariable declared even if the declaration is later in the code. It happens with var, but not let or const.

## 10.3 Arrow Funciton Exercises
First exercise:
```javascript
const double = arr => (arr.map(val => val*2));
```
Second exercise:
```javascript
const squareAndFindEvens = numbers => {
    const squares = numbers.map(num => num**2);
    const evens = squares.filter(square => square%2 === 0);
    return evens;
}
```
Shorter version:
```javascript
const squareAndFindEvens = numbers => numbers.map(num => num**2).filter(square => square % 2 === 0);
```

## 10.4 Rest and Spread Exercises
See rest-spread.js

## 10.5 Object Enhancements
Same keys and values:
```javascript
function createInstructor(firstName, lastName){
  return {
    firstName, lastName
  }
}
```
Computed property names:
```javascript
const instructor = {
    firstname: "Colt',
    [favoriteNumber]: "That is my favorite!"
}
```
Object methods:
```javascript
var instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  }
}
```
createAnimal function
```javascript
function createAnimal(species, verb, noise){
    return {
        species,
        [verb]() {
            console.log(noise);
        }
    }
}
```
## 10.6 Destructuring
- Object Destructuring 1
    + 8
    + 1846
- Object Destructuring 2
    + { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }
- Object Destructuring 3
    + "Your name is Alejandro and you like purple"
    + "Your name is Melissa and you like green"
    + "Your name is undefined and you like green"
- Array Destructuring 1
    + "Maya"
    + "Marissa"
    + "Chi"
- Array Destructuring 2
    + "Raindrops on roses"
    + "whiskers on kittens"
    + \["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings" \]
- Array Destructuring 3
    + \[10, 30, 20 \]
- ES2015 Object Destructuring
```javascript
let obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const { numbers: { a, b } } = obj;
```
- ES2015 One-line Array Swap
```javascript
let arr = [1, 2];
arr = [arr[1], arr[0]];
```
- Race Results Function
```javascript
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
```
## 10.7 Maps and Sets
- Quick Question 1
    + Set(4) \[1,2,3,4 \]
- Quick Question 2
    + 'ref'
- Quick Question 3
    + Map(2) {\[1,2,3] => true, \[1,2,3] => false}
- Has Duplicate
```javascript
function hasDuplicate(arr) {
    return arr.length != [...new Set(arr)].length
}
```
- Vowel Count
```javascript
function vowelCount(str) {
    const vowelSet = new Set('aeiou');
    const vowelMap = new Map();
    [...str].filter(char => vowelSet.has(char)).forEach(vowel => {
        let total;
        vowelMap.get(vowel) === undefined ? total = 1 : total = vowelMap.get(vowel) + 1;
        vowelMap.set(vowel, total);
    });
    return vowelMap;
}
```
