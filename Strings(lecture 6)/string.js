
		var string = 'Some text of your choice !';
		console.log(string);

		//var badstring = this is string; // no quotes
		var badstring = string;
		console.log(badstring);
		var sglquotes = 'single quote string';
		console.log(sglquotes);
		sglquotes = "double quote string";
		console.log(sglquotes);
		sglquotes = 'I\'m feeking Blue !';
		console.log(sglquotes);
		console.log("The above sentence uses an escaping character !");

		console.log("escaping characters");
		console.log('\\\\ <-backslash');
		console.log('\\\' <-singlequote');
		console.log('\\\" <-doublequotes');
		console.log('\\n <-newline');
		console.log('\\r <-carriage return');
		console.log('\\v <-vertical tab');
		console.log('\\t <-tab');
		console.log('\\b <-backspace');
		console.log('\\f <-form feed');

		var longstring = "This is a very long string which need "+
							"to wrap across multiple lines because "+
							"otherwise my code is unreadable";

		console.log(longstring);													//prints in 1 line
		longstring = 'This is a very long string which need \
						to wrap across multiple lines bacuse \
						otherwise my code is unreadable';
		console.log(longstring);													//prints the same as above

		console.log("Concatenation string and number");
		console.log("String first and then number " + 2+4+2);
		console.log(2+4+2+" Number first and then string");

		var mybday = '10'+11;
		console.log(mybday);
		console.log(typeof(mybday));

		var mystr = '234';
		var mynum = Number(mystr);
		console.log(typeof(mynum));

		mystr = mynum.toString();
		console.log(typeof(mystr));