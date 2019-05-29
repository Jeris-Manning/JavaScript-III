/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default binding for "this." Points to the source of the biggest scope available, (typically the window), by name.
* 2. Implicit binding occurs when "this" is used in the context of an object. A good rule of thumb is "this" refers to whatever is to the left 
of the dot when "this" is referenced on the right.
* 3. New binding happens when the "new" keyword is used to create an object from a constructor function. "This" will refer to the new version of the object that was constructed.
* 4. Explicit binding is done with the call(), apply(), and bind() methods. These methods set "this" to equal whatever parameter is explicitly provided.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let windowThis = function() {
  let testName = "Nameless";
  console.log(this.testName);
  console.log(testName);

};

windowThis();




// Principle 2

// code example for Implicit Binding

const moose = {
  "size": "huge",
  "strength": "immense",
  "legs": 4,
  "charge" : function(){
    console.log(`You have a ${this.size} beast coming at you a million miles an hour. Good luck!`)
  }
};

moose.charge();


// Principle 3
// code example for New Binding
function BugMaker(bugParams) {
  this.species = bugParams.species;
  this.nickName = bugParams.nickName;
  this.color = bugParams.color;
  this.favoriteFood = bugParams.favoriteFood;

};

BugMaker.prototype.bugTalk = function() {
  console.log(`I'm a ${this.nickName} who likes to eat ${this.favoriteFood}!`);
};

const ant = new BugMaker({
  species: "ant",
  nickName: "jerk",
  color: "black",
  favoriteFood: "maple syrup"
});

const ladyBug = new BugMaker({
  species: "ladybug",
  nickName: "ladybird",
  color: "crimson",
  favoriteFood: "aphids"
})

ant.bugTalk();
ladyBug.bugTalk();





// Principle 4
let bugMirror = function() {

  console.log(`I am a ${this.color} bug!`);

};

bugMirror.call(ant);


// code example for Explicit Binding