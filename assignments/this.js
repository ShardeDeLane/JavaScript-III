/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - is the default setting when you have a function that is not pointing to anything such as an object, it will default to Window

* 2. Implicit Binding - when dot notation is used to invoke a function, whatever is to the left of the dot becomes 'this'

* 3. New Binding - when a constructor function is used 'this' refers to the instance of the object created by the constructor

* 4. Explicit Binding - when .call(), .apply(), or .bind() is used on a function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 function WindowGlobal = function () {
     console.log(this)
 }
 console.log(windowGlobal())

// Principle 2

// code example for Implicit Binding
var anObject = function(){
    this.hero = hero
    this.faction = faction
}
anObject.prototype.greeting = function(){
    return(console.log(`${this.hero} says hello`))
}


// Principle 3

// code example for New Binding
var AnObject = function(){
    this.hero = hero
    this.faction = faction
}
anObject.prototype.greeting = function(){
    return(console.log(`${this.hero} says hello`))
}

var ConstructorObject = new AnObject()
ConstructorObject.greeting()

// Principle 4

// code example for Explicit Binding
var jogger = {
    name: "John",
    activity: "running"
}

var callJogger = function(){
    this.name = name
    this.property = property
}
callJogger.prototype = function(activity){
    console.log(`${this.name} is ${activity}`)
}

console.log(callJogger.call(jogger, jogger.activity))
