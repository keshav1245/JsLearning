//length function

var carBrand = 'Toyota';
console.log(carBrand.length);
carBrand.length = 4; 	//this wont affect the string
console.log(carBrand);
console.log(carBrand.length); 

//printing any element from string

console.log("4th element of carbrand variable is : "+carBrand[3]); // computer counts from 0

//finding substring

var str = 'Humpty Dumpty Sat on a Wall.';
console.log(str);
console.log('Index of sat : '+str.indexOf('sat')); // case sensitive
console.log('Index of Sat : '+str.indexOf('Sat'));

console.log('Index of pty : '+str.indexOf('pty'));

//finding number of s

str = "she sells seashells on the seashore ";
let count = 0;
var position = str.indexOf('s');

while(position !== -1){
	count++;
	position = str.indexOf('s',position+1); // position is increment by 1 from the last known position so
											//that left out part of the string could be scanned
}

console.log('Number of s is : '+count);

//slicing characters

console.log(str.slice(4,9)); 				//sells
console.log(str.slice(0,4)); 				//she
console.log(str.slice(-9,-1));				//seashore
console.log(str.slice(-9));					//seashore //went from -9 to end of the string 
													   //see the difference -9 to end and -9 to -1

console.log(str.toUpperCase());				//to upper case
console.log(str);							//but it does not change original string
console.log(str.toLowerCase());				//to lowercase

//replace

console.log(str);
console.log(str.replace('she','he'));
console.log(str); 							//no change to original string


