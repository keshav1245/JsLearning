let val1 = document.getElementById('val1');
		let val2 = document.getElementById('val2');

		val1.addEventListener('click',function(){
			alert("You chose : "+val1.textContent);
		});
		val2.addEventListener('click',function(){
			alert("You chose : "+val2.textContent);
		});