//learning about functions 

var arr = ['keshav','tangri',21,'December',1998];
console.log(arr.join(" ")); 											//here join is a function
var str = "My name is Keshav Sharma and i am an Engineering student (because I live in India)";
console.log(str.replace('Sharma','Tangri'));							//here replace is a function
																		//the values passed in function are
																		//parameters



var age = Math.random()*50+1;											//here random() is a function
str = 'My name is keshav and i am randomly '+age+" years of age !\n Thanks Js";
console.log(str);														//here log() is a function

//methods are built in browser functions
//The distinction is that methods are functions defined inside objects. 
//Built-in browser functions (methods) and variables (which are called properties) 
//are stored inside structured objects, to make the code more efficient and easier to handle.

//custom funtion

function custom(){
	var name = prompt("Enter your Name : ");
	alert("Hope you are liking JavaScript "+name+" !");
}


//invoke the function by writing the function name in console
console.log("Invoke function by writing 'custom();' in console down below ! ");


//anonymous functions : functions without name 
//they dont do anything on their own and they are used with event handlers 
//eg
var myBut = document.querySelector('button');

myBut.onclick = function(){
	alert("Button Clicked !");
}

//SCOPE OF A FUNCTION -->> REFER HTML INBUILT Js CODE AND first.js and second.js


//FUNCTIONS INSIDE OTHER FUNCTIONS

console.log("Invoke function by writing 'contain();' in console down below ! ");
function contain(){
	//calaling other functions from contain functions !!
	subfunc1();
	subfunc2();
	subfunc3();
}

function subfunc1(){
	console.log("Inside subfunc1 !");
}
function subfunc2(){
	console.log("Inside subfunc1 !");
}
function subfunc3(){
	console.log("Inside subfunc1 !");
}