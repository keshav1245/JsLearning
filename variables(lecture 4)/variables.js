let name; 											//declaration of variable name 
		let age;  											//declaration of variable age
				  											//can be declared using var keyword also
		name = 'Keshav Tangri'; 							//initialized value to name variable
		age = 20;											//initialized value to age variable 
		let program = "Computer Science and Engineering";   //declaration and initialization in one line

		console.log("My name is "+name+" and i am "+age+" years old and i am pusuing "+program+" from CCET,chd");


		//let keyword scoping
		//let have scope in their block they are defined in, as well as contained in sub blocks.
		letTest();
		varTest();
		referr();
		function letTest(){
			let x =1;
			if(true){
				let x =2; //different variable
				console.log(x); //2
			}

			console.log(x); // 1

		}
		function varTest(){
			var x = 1;
			if(true){
				var x = 2; //same x
				console.log(x);
			}

			console.log(x);
		}

		// {
		// 	let x =3;
		// 	let x =10										//redeclaration error
		// }

		//Let does not create a property on the global object.

		var x = 'global';
		let y = 'global';

		console.log(this.x);
		console.log(this.y);

		function referr(){
			// console.log(x);  //Reference error
			console.log(y);
			
			var y =1;
			// let x =2;

		}


		//VARIABLE TYPES

		let sampleVariable =  3.57;
		console.log(typeof(sampleVariable));							//Number
		sampleVariable = 'hello world !';
		console.log(typeof(sampleVariable));							//String
		sampleVariable = 6<9;
		console.log(typeof(sampleVariable));							//Boolean
		sampleVariable = ['keshav',20,'CSE','CO17333'];//Array
		console.log(typeof(sampleVariable));							//Object
		sampleVariable = {
			firstname : 'Keshav',
			surname : 'Tangri',
			age : 20,
			employment : "Student"
		};
		console.log(typeof(sampleVariable));							//Object



		const somevariable = 7;
		console.log(somevariable);
		//somevariable = 8;  throws error
