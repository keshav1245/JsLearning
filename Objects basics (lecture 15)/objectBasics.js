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


console.log(person.name.first);
console.log(person.name.last);
