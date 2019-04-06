
      function Person(first, last, age, gender, interests) {
        this.name = {
          first,
          last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
      };
      Person.prototype.bio = function() {
        // First define a string, and make it equal to the part of
        // the bio that we know will always be the same.
        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        // define a variable that will contain the pronoun part of
        // the second sentence
        var pronoun;
        // check what the value of gender is, and set pronoun
        // to an appropriate value in each case
        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
          pronoun = 'He likes ';
        } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
          pronoun = 'She likes ';
        } else {
          pronoun = 'They like ';
        }
        // add the pronoun string on to the end of the main string
        string += pronoun;
        // use another conditional to structure the last part of the
        // second sentence depending on whether the number of interests
        // is 1, 2, or 3
        if(this.interests.length === 1) {
          string += this.interests[0] + '.';
        } else if(this.interests.length === 2) {
          string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
          // if there are more than 2 interests, we loop through them
          // all, adding each one to the main string followed by a comma,
          // except for the last one, which needs an and & a full stop
          for(var i = 0; i < this.interests.length; i++) {
            if(i === this.interests.length - 1) {
              string += 'and ' + this.interests[i] + '.';
            } else {
              string += this.interests[i] + ', ';
            }
          }
        }
        // finally, with the string built, we alert() it
        alert(string);
      };
      Person.prototype.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
      };
      Person.prototype.farewell = function() {
        alert(this.name.first + ' has left the building. Bye for now!');
      }
      var person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);




// Say we wanted to create a Teacher class, like the one we described in our initial object-oriented 
// definition, which inherits all the members from Person, but also includes:

// A new property, subject — this will contain the subject the teacher teaches.
// An updated greeting() method, which sounds a bit more formal than the standard greeting() method — more 
// suitable for a teacher addressing some students at school.

//Defining a Teacher() constructor

function Teacher(first,last,age,gender,interests,subject){
  Person.call(this,first,last,age,gender,interests,subject);
  this.subject =subject;
}
console.log(Teacher.prototype);//teacher doesnot inherit the functions in the Person prototype
console.log(Object.getOwnPropertyNames(Teacher.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));

console.log(Person.prototype.greeting);
console.log(Teacher.prototype.greeting);

//We need to get Teacher() to inherit the methods defined on Person()'s prototype. So how do we do that?
//here we then use Object.create 

Teacher.prototype = Object.create(Person.prototype);

console.log("After inherting functions, now printing the greeting function : ");

console.log(Person.prototype.greeting);
console.log(Teacher.prototype.greeting);
console.log(Teacher.prototype.constructor);
Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });
console.log(Teacher.prototype.constructor);
console.log(Teacher);


//Giving a new greeting function to Teacher
Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
teacher1.farewell();


//making the student cconstructor inherit the person 

function Student(first,last,age,gender,interests){
  Person.call(this,first,last,age,gender,interests);
}
Student.prototype = Object.create(Person.prototype);

Object.defineProperty(Student.prototype,'constructor',{
  value : Student,
  enumerable : false,
  writable : true
});

Student.prototype.greeting = function(){
  alert("Yo! I am "+this.name.first);
}

var student1 = new Student('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

student1.greeting();


//ECMA Script 2015 Classes

class Person2 {
  constructor(first,last,age,gender,interests){
    this.name = {
      first,last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests
  }

  greeting(){
    console.log(`Hi! I\'m ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now !`);
  };

}

// The class statement indicates that we are creating a new class. Inside this block, we define all the 
// features of the class:

// The constructor() method defines the constructor function that represents our Person class.
// greeting() and farewell() are class methods. Any methods you want associated with the class are defined 
// inside it, after the constructor. In this example, we've used template literals rather than string 
// concatenation to make the code easier to read.

let tangri = new Person2('keshav','tangri',20,'Male',['Coding','Photography']);
tangri.greeting();
tangri.farewell();

class Teacher2 extends Person2{
  constructor(first,last,age,gender,interests,subject,grade){
    super(first,last,age,gender,interests);                        //calling the parent constructor
    this.subject = subject;
    this.grade = grade;
  }

  bio(){
    console.log(`Prof. ${this.name.last} is ${this.age} years old and teaches ${this.subject}`);
  };

  get subject(){
    return this._subject;
  }

  set subject(subjectval){
    this._subject = subjectval;
  }

}


let tedMosby = new Teacher2('Ted','Mosby',40,'Male',['Architecture facts','Mosby boys detective'],'Architecture 101','High School');

tedMosby.greeting();
tedMosby.farewell();
tedMosby.bio();



//getter setters
// In our class above we have a getter and setter for the subject property. We use _  to create a separate 
// value in which to store our name property. Without using this convention, we would get errors every time 
// we called get or set. At this point:

// To show the current value of the _subject property of the snape object we can use the snape.subject getter 
// method. To assign a new value to the _subject property we can use the snape.subject="new value" setter method.

console.log(tedMosby.subject);
tedMosby.subject = "Eco 201";
console.log(tedMosby.subject);




