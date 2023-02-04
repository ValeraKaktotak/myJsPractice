/*
Terminal Game - Create Hero Prototype
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
*/

function Hero(name = 'Hero') {
  this.name = name
  this.position = '00'
  this.health = 100
  this.damage = 5
  this.experience = 0
}

let myHero = new Hero()
console.log(myHero.name), 'Hero', 'Hero should have a \'name\' attribute with value "Hero"'
myHero.experience, 0, "Hero should have an 'experience' attribute with value 0"
myHero.health, 100, "Hero should have a 'health' attribute with value 100"
myHero.position, '00', 'Hero should have a \'position\' attribute with value "00"'
myHero.damage, 5, "Hero should have a 'damage' attribute with value 5"

//******************************************************************************************************** */
/**
 * Define a class Person with the following properties:

A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
 */

class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
  sayFullName() {
    return this.firstName + ' ' + this.lastName
  }
  static greetExtraTerrestrials(raceName = 'raceName') {
    return 'Welcome to Planet Earth ' + raceName
  }
}

//******************************************************************************************************** */
/**
 * Complete the solution so that it reverses the string passed into it.
 */

function solution(str) {
  const string = str.split('')
  let reversStr = []
  for (let i = 0; i < string.length; i++) {
    reversStr.unshift(string[i])
  }
  return reversStr.join('')
}

//******************************************************************************************************** */
/**
 * What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
 */

function addLength(str) {
  return str.split(' ').map((word) => `${word} ${word.length}`)
}

//******************************************************************************************************** */
/**
 * Implement a function which convert the given boolean value into its string representation.
 */
function booleanToString(b) {
  return b.toString()
}
//******************************************************************************************************** */
