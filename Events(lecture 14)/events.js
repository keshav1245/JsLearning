//Events and Event Listeners

//Changing background color randomly on clicking a button
var btn = document.querySelector('button');

btn.onclick = function(){//on 1 click
	var color = 'rgb('+randomn(255)+','+randomn(255)+','+randomn(255)+')';
	document.body.style.backgroundColor = color;
}

function randomn(num){
	return Math.floor(Math.random()*(num+1));
}

btn.onfocus = function(){//on focussing 
	btn.style.backgroundColor = "black";
	btn.style.color = 'white';
}
btn.onblur = function(){//on removing from focus
	btn.style.backgroundColor = "white";
	btn.style.color = 'black';	
}
btn.ondblclick = function(){//on double click
	btn.style.backgroundColor = "purple";
}

btn.onmouseover = function(){//hovering mouse
	btn.style.fontSize = '30px';
}
btn.onmouseout = function(){
	btn.style.fontSize = '13px';	
}

//other way -> using addEventListener()
//using addEventlistener we can add multiple event listeners with same type of event
var btn2 = document.getElementById('eventbtn');

btn2.addEventListener('click',function(){
	alert('Button clicked using addEventListener !');
});
btn2.addEventListener('mouseover',function(){
	btn2.style.backgroundColor = 'rgba(0,180,0,0.4)';
});
btn2.addEventListener('mouseout',function(){
	btn2.style.backgroundColor = 'white';
});



////////////////////event targets/////////////////////////
// Here you can see that we are including an event object, e, in the function, and in the function setting a 
// background color style on e.target — which is the button itself. The target property of the event object 
// is always a reference to the element that the event has just occurred upon. So in this example, we are setting 
// a random background color on the button, not the page.
var eventbtn = document.querySelector('.eventbtn');

eventbtn.addEventListener('click',bgChange);
function bgChange(e) {
  var rndCol = 'rgb(' + randomn(255) + ',' + randomn(255) + ',' + randomn(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}  






//PREVENT DEFAULT - when you want to prevent some activity because of wrong info or task performed .. example
//submitting form with info filled.

var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}

