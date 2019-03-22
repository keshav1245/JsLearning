//basics of Arrays

//some daily food items in an array
var foodItems = ['apple','wheat','bran','oils','milk','pomegranate'];
console.log(foodItems);//printing out whole array 
var person = ['Keshav','Tangri',20,1998,'Photographer'];	//array having firstname,lastname,age,yearofbirth
															//hobby
															//Array can store any values
console.log(person);
//accessing the elements in araay is same as assessing characters in  a string
console.log("First Name : "+person[0]);
console.log("Age : "+person[2]);
console.log("Hobby : "+person[4]);

//we can also change the elements of the array like this
console.log("Initial array : "+person);
person[4] = 'Teaching';
console.log("Modified array : "+person);

//multidimensional array : array inside array

var somearray = [2,4,6,8,10,[1,3,5,7,9]];					//Multidimensional Array 

console.log(somearray);
console.log(somearray[5]);
console.log(somearray[5][2]); 								// accessing the multidimensional array 

//length function

console.log(somearray.length);								//6
console.log(somearray[5].length);							//5

console.log("Person array : "+person);
console.log("Person array length : "+person.length);
person.length = 6;
console.log("Person array new length : "+person.length);
console.log("Person array after length change : "+person);
console.log(person[5]);										//undefined
person[5] = 'Student';										//adding employement info
console.log(person);

person.length = 4; 											//truncating the array
console.log(person);
person.length = 6; 											//trying to restore the data :P
console.log(person);										//Oh No ! data is lost ! :D
person.length = 4;
//split function
var str = 'she sells seashells on the seashore';
var myarr = str.split();									//whole string as 1 element
console.log(myarr);
myarr = str.split('');										//1 element = 1 character 
console.log(myarr);
myarr = str.split(' ');
console.log(myarr);											//space spliting

//convert array to string 
var mystr = person.join();									// join elements of array by default uses comma
console.log(mystr);
mystr = person.join(';');
console.log(mystr);											//join elements of array with ; inbetween

mystr = somearray.toString()								//another way of converting to string from array
console.log(mystr);
mystr = somearray.join('#');
console.log(mystr);

console.log("Initial value of person array : "+person+" its length : "+person.length);
person.push('Student','CSE');								//push the values at the end	
console.log("Modified(push) value of person array : "+person+" its length : "+person.length);
person.pop();												//pop the last element 
console.log("Modified(pop) value of person array : "+person+" its length : "+person.length);
person.unshift('CO17333');
console.log("Modified(unshift) value of person array : "+person+" its length : "+person.length);
person.shift();
console.log("Modified(shift) value of person array : "+person+" its length : "+person.length);

