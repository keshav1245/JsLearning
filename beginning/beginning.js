
const para = document.querySelector('.jspara'); //linking the element with class jspara

para.addEventListener('click',updateName);//adding an Event Listener  with the linked element 

function updateName(){ //this is the function which is called by the event 
	let name = prompt("Enter Player 1 Name : ");
	para.textContent = 'Player 1 : '+name;
}