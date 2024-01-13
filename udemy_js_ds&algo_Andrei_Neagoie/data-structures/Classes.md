# JavaScript Concepts

## Types

### Primitive Types

The values of these types exist within the language
- numbers
- strings
- booleans
- null
- undefined

### Reference Type

The values of these types are created by the programmer
- objects
- arrays
- functions


These are place holders types

```javascript

var object1 = { value: 10 } // new content in memory (new object created in memory)

var object2 = object1 // pass by reference 
// i.e. both object1 and object2 are referencing the same location in memory

var object3 = { value: 10 } // new content in memory (new object created in memory)

```

## Context (vs. Scope)

### Scope
- gets confused with scope 
- scope is created with `{}` (curly brackets)

```javascript
{
  // new scope
}

function a() {
  // new scope
  let b = 4
}
```

### Context

- context tells you where we are within the object
- `this` keyword refers to the current context
  - `this` is the `window` object in the browser JavaScript console in the global level

```javascript
// Run in the browser JS console:

// Example #1:
console.log(this) // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this === window) // true
this.alert("hello") // shows a browser alert pop-up


// Example #2:
function a() {
  console.log(this)
}

a() // Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// Example #3:
const object4 = {
  c() {
    console.log(this)
  }
}

object4.c() // {c: ƒ} (which is basically `object4`)
```

- *Context* need to be understood to effetively implement instantiation in JavaScript

## Instantiation

- useful in making multiple copies of the same object in memory

### ES6 Implementation
- `new` keyword implies instantiation
- `extends` keyword helps extend a given class to an extended class
- `super` keyword ties the extended class constructor to the base class constructor

```javascript
// Base Class
class Player {
  // constructor runs everytime instantiation of a class occurs
  constructor(name, type) { 
    console.log(this)
    this.name = name
    this.type = type
  }

  // class methods
  introduce() {
    console.log(`Hi! I am ${this.name} of type ${this.type}!`)
  }
}

// Extended Class
class Wizard extends Player {
  constructor(name, type) { 
    super(name, type)
  }

  play() {
    console.log(`WEEE! I am a ${this.type}!`)
  }
}

const wizard1 = new Wizard('Shelly','Healer')
const wizard2 = new Wizard('Shaun','Dark Magic')
```

### Pre-ES6 Implementation

- Classical Inheritance

```javascript
var Player = function(name, type) {
  this.name = name
  this.type = type
}

Player.prototype.introduce = function() {
  console.log(`Hi! I am ${this.name} of type ${this.type}!`)
}

var wizard1 = new Player('Shelly', 'Healer')
var wizard2 = new Player('Shawn', 'Dark Magic')

wizard1.play = function() {
  console.log(`WEEE! I am a ${this.type}!`)
}

wizard2.play = function() {
  console.log(`WEEE! I am a ${this.type}!`)
}
```