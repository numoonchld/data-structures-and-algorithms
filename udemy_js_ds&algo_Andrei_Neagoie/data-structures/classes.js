/* REFERENCE TYPE */ 

console.log([] === []) // false
console.log([1] === [1]) //false

var object1 = { 
  value: 10,
}

var object2 = object1

var object3 = { 
  value: 10,
}

console.log(object1 === object2) // true
console.log(object1 === object3) // false

object1.value = 15
console.log(object2.value) // 15

console.log(object3.value) // 10

/* CONTEXT */

/* 
Run following in a browser JS console:

console.log(this) // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

console.log(this === window) // true

this.alert("hello") // shows a browser alert pop-up
*/

const object4 = {
  c() {
    console.log(this)
  }
}

object4.c() // {c: ƒ} (which is basically `object4`)

/* INSTANTIATION */

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

wizard1.play() // WEEE! I am a Healer!
wizard1.introduce // Hi! I am Shelly of type Healer!

