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
