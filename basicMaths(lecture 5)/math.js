//Number properties
		console.log(Number.EPSILON);
		console.log(Number.MAX_SAFE_INTEGER);
		console.log(Number.MAX_VALUE);
		console.log(Number.MIN_SAFE_INTEGER);
		console.log(Number.MIN_VALUE);
		console.log(Number.NaN);
		console.log(Number.NEGATIVE_INFINITY);
		console.log(Number.POSITIVE_INFINITY);
		console.log(Number.prototype);
		//Number Methods

		console.log(Number.isNaN('FF'));
		console.log(Number.isNaN('F45'));

		console.log(Number.isFinite(599333333333333333333333333333));
		console.log(Number.isFinite(9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999));

		console.log(Number.isInteger(4.56));
		console.log(Number.isInteger(95));

		console.log(Number.isSafeInteger(903));
		console.log(Number.isSafeInteger(999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999));

		console.log(Number.parseFloat('FFER'));
		console.log(Number.parseFloat('5.350'));

		Number.parseInt('FFER',10);
		for(var i=2;i<=36;i++){
			console.log("Int with base "+i+" is : "+Number.parseInt('FF',i));
		}


		var myInt =33;
		var myFloat = 3.1492;
		console.log(myFloat);
		console.log(myInt);
		console.log(typeof(myInt));
		console.log(typeof(myFloat));

		//Arithmetic Operators

		let a =4;
		let b = 8;
		console.log(a+b);
		console.log(a-b);
		console.log(a*b);
		console.log(a/b);
		console.log(a%b);
		console.log(a**b);
		console.log(Math.pow(4,8));
		console.log(5+10*3);				//operator precedence
		console.log(a+b/8+2);
		console.log(a++);
		console.log(++a);
		console.log(++a*b+++b+a);