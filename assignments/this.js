/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding  - when we use din as a global scobe, you cand bine any variabile, object to the window ex: window.age=3; .. or you can console.log(this);
 * 2. Implicit Binding - when invok a function by a dot , instead of writing the object we can adreess like  this.function not object.function
 * 3. New Binding - when we create a object with a contruction function , the object its created and returned without writing the return statement
 * 4. Explicit Binding  - when call or apply is used on a object , when we want to take a method from another object. ex: person.spleak.call(child)
 *
 * write out a code example of each explanation above
 */

console.log("Hello Javascript III");

// Principle 1

// code example for Window Binding

var sayAge = function() {
  console.log("My age is " + this.age);
};

let me = {
  name: "Sorin",
  age: 29
};

//sayAge.apply(me);
sayAge();
window.age = 29;
sayAge();

// Principle 2

// code example for Implicit Binding

let me = {
  name: "Sorin",
  age: 29,
  sayName: function() {
    console.log("My name is ${this.name}");
  }
};

// Principle 3

// code example for New Binding

let Animal = function(color, name, type) {
  //this={}
  this.color = color;
  this.name = name;
  this.type = type;
};

var tiger = new Animal("yellow", "Tyger");

// Principle 4

// code example for Explicit Binding

let sayName = function() {
  console.log("My name is " + this.name);
};
let me = {
  name: "Sorin",
  age: 29
};
sayName.call(me);
