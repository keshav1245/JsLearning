//defining and initializing

var person = {};

console.log(person);

person = {
	name : ['Keshav' , 'Tangri'],
	age : 20,
	gender : 'male',
	interests : ['coding','photography'],
	bio : function(){
		alert(this.name[0] + this.name[1]+' is '+this.age+' years old .');
	},
	greeting : function(){
		alert('Hi ! I\'m '+this.name[0]+'.');
	}
};
// The first four items are data items, and are referred to as the object's properties. The last two 
// items are functions that allow the object to do something with that data, and are referred to as the 
// object's methods.

console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
console.log(person.interests[1]);
console.log(person.bio);
console.log(person.greeting);

// Sub Namespaces :-> It is even possible to make the value of an object member another object.

person = {
	name : {
  		first: 'Bob',
  		last: 'Smith'
	},
	age : 20,
	gender : 'male',
	interests : ['coding','photography'],
	bio : function(){
		alert(this.name[0] + this.name[1]+' is '+this.age+' years old .');
	},
	greeting : function(){
		alert('Hi ! I\'m '+this.name[0]+'.');
	}
};
//dot notation
console.log(person.name.first);
console.log(person.name.last);
//brackett notation
console.log(person['name']['first']);
console.log(person['name']['last']);

//Bracket notation
console.log('Age by brackett notation : '+person['age']);
//dot Notation
console.log('Age by dot notation : '+person.age);

//changing valus 
console.log("Last name is : "+person.name.last);
person.name.last = 'McClause';
console.log('Now Last name is : '+person.name.last);

console.log("Creating new members in the object : ");
console.log("Eye color : "+person.eyesColor+" \nHeight : "+person.height);
person.eyesColor = 'Brown';
person.height = 1.12;
console.log("Eye color : "+person.eyesColor+" \nHeight : "+person.height);
person.farewell = function(){
	alert("Will meet again soon !");
}

//Saving user input into our object 
var food = 'Food';
var favfood = prompt("Which Food Item you like the Most ?");
person[food] = favfood;

console.log(person.Food);

//this keyword - The this keyword refers to the current object the code is being written inside
var fruit1 = {
	type : 'seedless',
	display : function(){
		console.log("This fruit is : "+this.type);
		// console.log("This fruit is : "+type);
	}	
}
var fruit2 = {
	type : 'with seed',
	display : function(){
		console.log("This fruit is : "+this.type);
	}	
}
console.log(fruit1.display());
console.log(fruit2.display());