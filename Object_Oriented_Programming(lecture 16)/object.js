// abstraction — creating a simple model of a more complex thing, which represents its most important 
// aspects in a way that is easy to work with for our program's purposes.

// Object data (and often, functions too) can be stored neatly (the official word is encapsulated) inside an 
// object package (which can be given a specific name to refer to, which is sometimes called a namespace), 
// making it easy to structure and access

// When an object instance is created from a class, the class's constructor function is run to create it. 
// This process of creating an object instance from a class is called instantiation — the object instance is 
// instantiated from the class.

// In OOP, we can create new classes based on other classes — these new child classes can be made to inherit 
// the data and code features of their parent class, so you can reuse functionality common to all the object 
// types rather than having to duplicate it.  Where functionality differs between classes, you can define 
// specialized features directly on them as needed.

//The fancy word for the ability of multiple object types to implement the same functionality is polymorphism

// JavaScript uses special functions called constructor functions to define and intialize objects and their 
// features. They are useful because you'll often come across situations in which you don't know how many 
// objects you will be creating

function createNewPerson(name){
	var obj = {};
	obj.name = name;
	obj.greating = function(){
		alert('Hi ! i\'m '+obj.name+'.');
	};
	return obj;
}

//creating a new person by calling the function 

var keshav = createNewPerson('keshav');
console.log(keshav.name);
keshav.greating();

// This works well enough, but it is a bit long-winded; if we know we want to create an object, why do we need 
// to explicitly create a new empty object and return it? Fortunately, JavaScript provides us with a handy 
// shortcut, in the form of constructor functions

function Person(name){
	this.name = name;
	this.greeting = function(){
		alert('I\'m '+this.name);
	}
}
var keshav = new Person('keshav');

console.log(keshav.name);
keshav.greeting();

var shreya = new Person('shreya');
console.log(shreya.name);
shreya.greeting();

function Person2(first, last, age, gender, interests){
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

var person1 =  new Person2('keshav','tangri',20,'Male',['music','skiing']);
person1.bio();
person1.greeting();
console.log(person1.age);
console.log(person1.interests[1]);
console.log(person1.name.first);
console.log(person1.name.last);


//Object.create(person)

