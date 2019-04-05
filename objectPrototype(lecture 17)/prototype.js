// // prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a 
// // template object that it inherits methods and properties from.
// An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

// Well, to be exact, the properties and methods are defined on the prototype property on the Objects' 
//constructor functions, not the object instances themselves

function Person(first, last, age, gender, interests){
	this.name = {
		'first' : first,
		'last' : last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.bio = function(){
		alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');

	};
	this.greeting = function(){
		alert('Hi ! I\'m '+this.name.first+'.');
	};
}

var person1 =  new Person('keshav','tangri',20,'Male',['music','skiing']);
console.log(person1.__proto__);
console.log(person1.__proto__.__proto__);
console.log(Person.prototype);
console.log(Object.prototype);

var myString = "This is a string";
console.log(myString.__proto__);//prototype functions of String
var myArray = ['element1','element2'];
console.log(myArray.__proto__);//prototype functions of array
var myNumber = 42;
console.log(myNumber.__proto__);

var person2 = Object.create(person1);
console.log(person2.__proto__);

console.log(person1.constructor);
console.log(person2.constructor);

// A clever trick is that you can put parentheses onto the end of the constructor property (containing any 
// required parameters) to create another object instance from that constructor. The constructor is a function 
// after all, so can be invoked using parentheses; you just need to include the new keyword to specify that you 
// want to use the function as a constructor.

var person3 = new person1.constructor('Shreya','Tangri',25,'female',['eating','chanting']);
console.log(person3.name);
console.log(person3.bio());
console.log(person3.constructor);
console.log(person3.constructor.name);
console.log(person1.constructor.name);
console.log(person3.__proto__);


Person.prototype.farewell = function(){
	alert(this.name.first + " is bidding us farewell");
};

person1.farewell();
person2.farewell();
person3.farewell();

Person.prototype.fullName = this.name.first + ' ' + this.name.last;

console.log(person3.fullName);//does not work

