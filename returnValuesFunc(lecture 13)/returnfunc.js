    var input = document.querySelector('.numberInput');
    var para = document.querySelector('p');

    function squared(num){
    	return num*num;
    }
    
    function cubed(num){
    	return num*num*num;
    }

    function factorial(num){
    	var x = num;
    	while(x>1){
    		num *= x-1;
    		x--;
    	}
    	return num;
    }

    function root(num){
    	return Math.sqrt(num);
    }

    input.onchange = function(){
    	var num = input.value;
    	if(isNaN(num)){
    		para.textContent = "You Need to Enter a Number !";
    	}else{
    		para.textContent = num + ' squared is : '+squared(num) +
    		"\n"+num+' cubed is : '+cubed(num)+
    		"\n"+num +' factorial is : '+factorial(num)+"\n"+num + " square root is : "+root(num);

    	}

    }
