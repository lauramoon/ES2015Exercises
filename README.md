# Section 10 Exercises

## let and const Exercise
```javascript
var PI = 3.14; //ES5 version
const PI = 3.14; //ES2015 version
```

- var has function-level scope; let has block-level scope. var can be redeclared; let cannot.
- const scope is like let, not var. const can neither be redeclared nor reassigned; var can be both.
- let can be reassigned, but const cannot.
- hoisting is when the interpreter considers avariable declared even if the declaration is later in the code. It happens with var, but not let or const.
