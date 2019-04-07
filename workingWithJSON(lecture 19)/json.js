//JSON = JavaScript Object Notation
// Converting a string to a native object is called parsing, while converting a native object to a string so 
// it can be transmitted across the network is called stringification.
// a JSON is a string whose format very much resembles JavaScript object literal format. You can include the 
// same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays, 
// booleans, and other object literals. This allows you to construct a data hierarchy, like so:

//DATA TAKEN FROM MDN WEB DOCS

var superHeroes = {

	"squadname" : "Super Hero Squad",
	"homeTown" : "Metro City",
	"formed" : 2016,
	'secretBase' : "Super tower",
	'active' : true,
	'members' : [
		{
      		"name": "Molecule Man",
      		"age": 29,
	      	"secretIdentity": "Dan Jukes",
	      	"powers": [
	        "Radiation resistance",
	        "Turning tiny",
	        "Radiation blast"
      		]

		},
		{
		      "name": "Madame Uppercut",
		      "age": 39,
		      "secretIdentity": "Jane Wilson",
		      "powers": [
		      "Million tonne punch",
		      "Damage resistance",
		      "Superhuman reflexes"
		      ]
    },
    {
		      "name": "Eternal Flame",
		      "age": 1000000,
		      "secretIdentity": "Unknown",
		      "powers": [
		      "Immortality",
		      "Heat Immunity",
		      "Inferno",
		      "Teleportation",
		      "Interdimensional travel"
		      ]
    }
	]
};

console.log(superHeroes.homeTown);
console.log(superHeroes['active']);
console.log(superHeroes['members']);
console.log(superHeroes['members'][0]['powers'][2]);



//ARRAYS AS JSON FORMAT

var superHeroesArray = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
];

console.log(superHeroesArray[0]['powers']);
console.log(superHeroesArray[1]['powers']);

//JSON requires double quotes to be used around strings and property names. Single quotes are not valid.

// stringify(): Accepts an object as a parameter, and returns the equivalent JSON string form.

var myJSON = { "name": "Chris", "age": "38" };
console.log(myJSON);
var myString = JSON.stringify(myJSON);
console.log(myString);

// parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.