//Loop basics 

//for loop

var veges = ['Spinach','Onion','Cabbage','Cauliflower','Brinjal'];
var data = 'The Vegetable Seller had ';

for(var i=0;i<veges.length;i++){
	console.log(data+" "+veges[i]);
}
console.log("PRINTING IN REVERSE ORDER : ");
for (var i = veges.length - 1; i >= 0; i--) {					//in reverse order
	console.log(data+" "+veges[i]);	
}

for(var i=0;i===veges.length;i++){ 								//this wont run at all because condition is false
	console.log(data+" "+veges[i]);
}

//exiting loop before all iterations ----- break statement

var nums = [1,3,5,7,9,11,2,13,15,17,19];

//finding the even number
for(var i =0;i<nums.length;i++){
	if(nums[i]%2===0){
		console.log('Total number of elements : '+nums.length+"\n We are exiting at : "+(i+1));
		break;
	}
}

//skipping iterations with continue statement

for(var i =0;i<nums.length;i++){
	if(nums[i]%2 === 0){
		console.log("Finally an Even Number !");
	}else{
		continue;
	}
}

//while loop
var cars = ['Ferrari','Lamborghini','Porsche','Mercedes','BMW','Audi','Jaguar'];

console.log("Some Popular sports car Brands are : ");
var j=0;
while(j<cars.length){
	console.log(" "+cars[j]);
	j++;
}
//do while , this will run code atleast once whether the condition is true or false 
j=0;
do{
	console.log("Value of j is zero yet it ran once ! #justDoWhileLoopThings !")
}while(j!==0);
