//Basics of If else 
//First see ifelse.html and ifelse.js before beginning as an introductory example

//boolean type if else
//just put value that is not false and the if block will work !

if(1){
	console.log("This serves as True !");
}else{
	console.log("This serves as False !");
}

if(0){
	console.log("This serves as True !");
}else{
	console.log("This serves as False !");
}

if("Some Not false value "){
	console.log("Voila ! this works !");
}else{
	console.log("As expected, it didn't work !");
}

if(""){
	console.log("Voila ! this works !");
}else{
	console.log("As expected, it didn't work !");
}

//Nesting of if Else 
var fruit =  'apple';
var fruit2 = 'mango'
if("Fruit Seller"){
	if(fruit === 'mango'){
		console.log("Let us buy some mangoes");
	}else if(fruit === 'apple'){
		console.log("Let us buy some apples");
	}
}

//Logical operators in if else

if(fruit === 'apple' && fruit2 === 'mango'){
	console.log("Apples and Mangoes are my favourite !");
}
if(!(fruit !== 'apple' && fruit2 === 'mango')){
	console.log("Apples and Mangoes are not available !");	
}

//switch case 
//switch case uses strict comparision

switch(fruit){
	case 'apple':
	console.log('Value of fruit is : '+fruit);
	break;

	case 'mango':
	console.log('Value of fruit is : '+fruit);
	break;
	default:
	console.log("Value of fruit is other than apple and mango !");
}

switch(fruit2){
	case 'apple':
	console.log('Value of fruit is : '+fruit2);
	break;

	case 'mango':
	console.log('Value of fruit is : '+fruit2);
	break;
	default:
	console.log("Value of fruit is other than apple and mango !");
}

//ternary operator
//short form of if else 
//used for choice between 2 , which is either true or false
//syntax (condition) ? run this code : run thos code instead

(fruit2 === 'apple') ? console.log("Fruit is apple !") : console.log("Fruit is mango !") 

