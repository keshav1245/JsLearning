var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1 ; i <= 5 ; i++){
	  var newImage = document.createElement('img');
	  newImage.setAttribute('src','images/pic'+i+'.jpg');
	
	newImage.addEventListener('click',function(e){
		displayedImage.setAttribute('src',e.target.getAttribute('src'));
	});
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',function(){
	if(btn.textContent === 'Darken'){
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	}else if(btn.textContent === 'Lighten'){
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
});