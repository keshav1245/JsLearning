//Basics of if else
addEventListener('click',function(){
if(document.getElementById('male').checked){
	document.getElementById('result').textContent = "Male should be greater than 21 years to get married !";
}else if(document.getElementById('female').checked){
	document.getElementById('result').textContent = "Female should be greater than 18 years to get married !";
}	
});

