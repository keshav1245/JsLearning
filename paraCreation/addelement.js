
	function paragragh(){ //function created
		let para = document.createElement('p');//a para element created
		para.textContent = 'You clicked a button !'; //adding text to the para element
		document.body.appendChild(para); // appending or inserting it in the HTML bosy
	}

	const buttons = document.querySelectorAll('button');//linking all the buttons instead of specific one 

	for (var i = buttons.length - 1; i >= 0; i--) { //for loop in Js
		buttons[i].addEventListener('click',paragragh);//linking the on click event with all the buttons so as
													   //if any button is clicked, paragraph() function runs !
	}

