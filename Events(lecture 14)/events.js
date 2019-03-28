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
