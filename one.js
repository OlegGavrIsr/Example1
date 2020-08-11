/**
 * 
 */

var animal = "חתולה";
var myAnimal = "החתול שמיל";
var myCat = " \"fff\"החתול שמיל";
var myNumber = 42;
var myNegativeNumber = -1;
var myFloat = 3.14;
var myBool = true;
var myNULLVar = null;


document.write(animal);
document.write(animal);
document.write(animal);
document.write("<br />");
document.write(myFloat);

var myAnimal = "חתול";
var myAnimalAge = 2;
alert("יש לי " + myAnimal + " וגילו " + myAnimalAge);

function hello(name)  {
  alert("שלום " + name);
}

function hello_undefined(from, to){
	if(from === undefined)
		from = "AA";
	if(to === undefined)
		to = "BB";	
	alert(from + " says hello to " + to);
}

function hello_undefined_2(from, to){
	from = from || "AA2";
	to = to || "BB2"; 
	alert(from + " says hello to " + to);
}

hello("oleg");
hello_undefined();
hello_undefined_2();


/*---------------------------------------------------------------------------------*/
//Variables: var, let, const

//https://www.w3schools.com/js/js_let.asp
//https://www.w3schools.com/js/js_const.asp

/*
-- var - global 
-- into any function - local
-- into blocks ( loop, ... ) - global

-- for doing into block local, use let
-- const same to let

-- variables defined with var are hoisted to the top ( you can use it on top and declare on bottom )
-- let & const not hoisted

-- const It does NOT define a constant value. It defines a constant reference to a value.

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

-- Redeclaring a var variable with let or const in the same scope, or in the same block, is not allowed:
var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

 */
/*-----------------------------------------------------------------------------------*/


// first option
function hello_ret(){
	return "מה נשמע?";
}

var a = hello_ret();
//מדפיסים את המשתנה
document.write("<br />" + a);

//second option
document.write("<br />" + hello_ret());


/*---------------------------------------------------------------*/

var number = 42;
var numbers = [42, 13, 7, 6, 1];
var names = ["יוסי", "טל", "מור", "רותם"];

document.write("<br />" + numbers[0]);
document.write("<br />" + numbers[5]); //undefined

if(typeof names[4] === 'undefined') {
	  // הפריט לא קיים
}
else {
	  // הפריט קיים
}

/*----------------------------------------------------------------*/

var vip1 = [];
vip1["first_name"] = "יודה"; 
vip1["last_name"] = "לוי"; 
vip1["girlfriend"] = "שלומית"; 
vip1["x_girlfriend"] = "נינט";

var x = vip1["first_name"];
document.write("<br />" + x);// יודה

/*---------------------------------------*/

//declare:
var vip2 = ["שלומית", "נינט", "לוי", "יודה"];
//or
var vip3 = [];
vip3[0] = "שלומית";
vip3[1] = "נינט";
vip3[2] = "לוי";
vip3[3] = "יודה";

//change a value
vip2[0] = "ששש";
vip3[1] = "sss";

//add a new array member to end
vip2.push("qqq");//result:  val2[4] == "qqq"

//delete elements from array
vip2.splice(0,1);// array.splice(startDeleteIndex, numberOfDeletedElements/*optional, if == 0 not deleted nothing/);
document.write("<br />" + vip2[0]);// "לוי"

//delete & add elements from/to array
vip2.splice(1,2, "חיים", "ראובן");// array.splice(startDeleteIndex, numberOfDeletedElements/*optional, if == 0 not deleted nothing/, added Elms /*Optional. The new item(s) to be added to the array*/);
document.write("<br />" + vip2);// "נינט", "חיים", "ראובן","qqq"

//empty all this array:
var vip3 = [];//will delete all elements that were in this array

var newArr = new Array("my", "array");	

/*--------------------------------------*/

for(var i in newArr){
	document.write("<br />" + i);
}

/*------------------------*/

//Object
obj = {
		n: 	 1,
		str: "Вася"
	}

document.write("<br />" + obj.n);
document.write("<br />" + obj.str);

document.write("<br />");
/*---------------------------------------------*/

var farmAnimals = ["פרה", "חמור", "תרנגולת"];
var wildAnimals = ["זברה", "פיל", "אריה"];

var animals = farmAnimals.concat(wildAnimals);
var stringOfAnimals = animals.join();//by default this a ","
var stringOfAnimals = animals.join(" # ");

/*------------------------------------------------------------------------------*/

//Print Object

var el_down = document.getElementById("GFG_DOWN"); 

var GFG_object = {  
    prop_1: 'val_11',  
    prop_2: 'val_12',  
    prop_3: 'val_13' 
}; 
  
var printObj = function(obj) { 
    var string = ''; 

    for(var prop in obj) { 
        if(typeof obj[prop] == 'string') { 
            string+= prop + ': ' + obj[prop]+'; </br>'; 
        } 
        else { 
            string+= prop + ': { </br>' + print(obj[prop]) + '}'; 
        } 
    } 

    return string; 
} 
function gfg_Run() {  
    el_down.innerHTML = printObj(GFG_object); 
} 

/*--------------------------------------------------*/

//פונקציה אנונימית, כשמה, היא פונקציה ללא שם.
/*
function (){
    alert("מה המצב, אחי?!");
}
*/

/*--------------------------------------------------------------*/

//אירועים ומאזינים לאירועים ב-javascript
//Events & Listeners

document.getElementById("myBtn").addEventListener("click", myfnc);

function myfnc(){
    alert("מה המצב, אחי?!");
}
   
//you can put anonymous function
document.getElementById("myBtn").addEventListener("click", function(){alert("מה המצב, אחי?!");});  
    
//		mouseover / mouseout	כשנכנסים או יוצאים עם העכבר מאלמנט
//		keyup / keydown	        כשלוחצים על כפתור במקלדת
//		focus / blur	        כשנכנסים או יוצאים משדה בטופס  
//		select	                כשבוחרים ערך מ- select list
//		submit	                כשמגישים טופס
//		load	                כשהדף סיים להטען
//		unload	                כשיוצאים מדף


//don't perform click operation but myfnc() only. click link dont open google.co but popup "מה המצב, אחי?!"
document.getElementById("myLink").addEventListener("click", function( e ){ 
    e.preventDefault();
    myfnc(); 
});

/*---------------------------------------*/

//parameter

//there is not order declare and use for parameters
var x = 1;

function example4() {
    if( 1 + 1 == 2 ) {
        var x = 4;//declare
    }

    alert( x ); // 4  //use
}
example4();


//if declare without var local parameter transform to global and overon him
//although x=2 inside function and we don't call to this function, parameter x is changes
var x = 1;

function example2() {
    x = 2;
    alert ("inside: " + x); // inside: 2
}

alert ("outside: " + x); // outside: 2



/*--------------------------------------------------------------*/
//Document include all elements
//We can devide document to forms ( טפסים ) 

var x = document.forms[0];
var y = document.forms[1];

//all elements in form there are in elements array
var firstElementInForm = document.forms[0].elements[0];

//we can get elements from form by name
var firstElementName = document.theForm.theText;

/*-------------------------------------------------------------*/

//The Validator

//The function
function theValidator(){
  // How long is the value of the text field?
  if(document.theForm.theText.value.length > 5){
    alert("מספיק ארוך");
  } else {
    alert("קצר מדי");
  }
}
// 1. Listen to the button 
// 2. Call the function on click
document.getElementById("theButton").addEventListener("click", theValidator);

/*---------------------------------------------------------------*/

//Create & add & remove elements to document
var listItem = document.createElement("li");

var textNode = document.createTextNode("This is a new list item.");
listItem.appendChild(textNode);

listItem.removeChild(textNode);
//listItem.insertBefore(newElement, textNode);

//see  here https://reshetech.co.il/javascript-tutorial/how-to-add-elements-to-the-dom

//create a
var link = document.createElement("a");
link.setAttribute('href','page/1');
link.setAttribute('class','blue-link');
link.innerHTML = 'go to page 1';

/*------------------------------------------------------------*/


//em - default size of font , for example 16px ( then em == 16px )
//css file
//font-size: 5em; /* 16px*5 = 80px */

/*---------------------------------------------------------------*/

//Change == and ===

//The strict equality operator (===) behaves identically to the abstract equality operator (==) except no type conversion is done
//The strict equality operator (===) behaves identically to the abstract equality operator (==) except no type conversion is done
//The === operator will not do the conversion, so if two values are not the same type === will simply return false.
//equality operator == does type coercion
//identity operator === does not do type coercion

//true == 1; //true, because 'true' is converted to 1 and then compared
//"2" == 2;  //true, because "2" is converted to 2 and then compared

//true === 1; //false
//"2" === 2;  //false

/*--------------------------------------------------------*/

//get Property from Object by name

var myObj = {
	one: "Hello",
	two: "Hi",
	haha:"who"
};

function checkObj(checkedProp){
	if(myObj.hasOwnProperty(checkedProp)){
		return myObj[checkedProp];
	}
	else
		return "Not found";
}
	
if (window.console && window.console.log) {
	document.write("Tralala <br />");
}
//if (!window.console) { window.console = { log: function(){} }; }
document.write("sss: ", myObj);
window.console.log("ffff:", checkObj("one"));

/*-----------------------------------------*/

//The JSON.stringify() method converts a JavaScript object or value to a JSON string
//JSON.stringify(value[, replacer[, space]])

window.JSON.srtingify(myObj);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

console.log(JSON.stringify({ x: 5, y: 6 }));
//expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
//expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
//expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
//expected output: ""2006-01-02T15:04:05.000Z""

//String-keyed array elements are not enumerable and make no sense in JSON
let a = ['foo', 'bar'];
a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a); 
// '["foo","bar"]'

	function replacer(key, value) {
	  // Filtering out properties
	  if (typeof value === 'string') {
	    return undefined;
	  }
	  return value;
	}

	var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
	JSON.stringify(foo, replacer);
	// '{"week":45,"month":7}'
	
	
/*------------------------------------------------*/

//JSON.parse() converst string to JavaScript Object
	
var objHohn = JSon.parse('{ "name":"John", "age":30, "city":"New York"}');
document.write(objHohn.name + "," + objHohn.age);

//Example 1:
//	json_demo.txt:
//{
//    "name":"John",
//    "age":31,
//    "pets":[
//        { "animal":"dog", "name":"Fido" },
//        { "animal":"cat", "name":"Felix" },
//        { "animal":"hamster", "name":"Lightning" }
//    ]
//}

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    var myObj = JSON.parse(this.responseText);
	    document.getElementById("demo").innerHTML = myObj.name;
	  }
	};
	xmlhttp.open("GET", "json_demo.txt", true);
	xmlhttp.send();
	

//Example 2:
	var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
	var obj = JSON.parse(text);
	obj.birth = new Date(obj.birth);

	document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
	
	
//Example 3:
	var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
	var obj = JSON.parse(text, function (key, value) {
	  if (key == "birth") {
	    return new Date(value);
	  } else {
	    return value;
	  }
	});

	document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
	
	
//Example 4:
	var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
	var obj = JSON.parse(text);
	obj.age = eval("(" + obj.age + ")");

	document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();
	
	
/*---------------------------------------------------------*/	
	
// eval - Evaluate/Execute JavaScript code/expressions
	
//1.
	var x = 10;
	var y = 20;
	var a = eval("x * y") + "<br>";
	var b = eval("2 + 2") + "<br>";
	var c = eval("x + 17") + "<br>";

	var res = a + b + c;
	
	//Result:
//	200
//	4
//	27
	
//2.
	var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
	var obj = JSON.parse(text);
	obj.age = eval("(" + obj.age + ")");

	//Result:
	// obj.age == 30
	
	
/*----------------------------------------------------------*/
	
// parseInt() - The parseInt() function parses a string and returns an integer
// parseInt( str, numSys);  str - string should be converted, numSys - numeral system to be used
// numSys = 16 (hexadecimal), numSys = 8 (octal), 10 (decimal)
// parseInt("0x") - hexadecimal, for example var k = parseInt("0x10"), k == 16
	
/*--------------------------------------------------------------*/	
	
//const immutable variable but not his value
	const cObj = {
			a: "aaa",
			b: 1
	}
	cObj = kkkk;//This will throw an TypeError
	cObj.a = "jjj";//Allow
	
	Object.freeze(cObj);//freeze all his values
	cObj.a = "yyy";//ignored, will not throw Error but ignored this operation.  Do nothing
	
	
/*---------------------------------------------------------------*/
	
//	Arrow Function
	
	hello = function() {
		  return "Hello World!";
		}
	
	hello2 = () => {
		  return "Hello World!";
		}
	
	
// If the function has only one statement, and the statement returns a value, 
//	you can remove the brackets and the return keyword:	
	
	hello = () => "Hello World!";
	
	
//	With parameter
	hello = function(val) {
		  return "Hello World!" + val;
		}
	
	hello = (val) => "Hello World!" + val;
//	If one parameter only should write:
	hello = val => "Hello World!" + val;
	

// What About this?
	
//	With a regular function this represents the object that calls the function:
	//Regular Function:
	hello = function() {
	  document.getElementById("demo").innerHTML += this;
	}

	//The window object calls the function:
	window.addEventListener("load", hello);

	//A button object calls the function:
	document.getElementById("btn").addEventListener("click", hello);
	
//	Result:
//	[object Window][object HTMLButtonElement]
	
//	With an arrow function this represents the owner of the function:
	//Arrow Function:
	hello = () => {
	  document.getElementById("demo").innerHTML += this;
	}

	//The window object calls the function:
	window.addEventListener("load", hello);

	//A button object calls the function:
	document.getElementById("btn").addEventListener("click", hello);
	
//	Result:
//	[object Window][object Window]
	
	
/*-------------------------------------------------------*/
	
//	Array filter() Method
	

	var ages = [32, 33, 16, 40];
	
	function checkAdult(age) {
	  return age >= 18;
	}

	function myFunction() {
	  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
	  // or
	  document.getElementById("demo").innerHTML = ages.filter(age => age >= 18);
	}
	
	// Result: [32, 33, 40]

//	The filter() method creates an array filled with all array elements that pass a test (provided as a function).
//	Note: filter() does not execute the function for array elements without values.
//	Note: filter() does not change the original array.


//	Array map() Method
	
	var numbers = [4, 9, 16, 25];
	var x = numbers.map(Math.sqrt)
	document.getElementById("demo").innerHTML = x;
	
	//	Result: [2,3,4,5]
	
//	The map() method creates a new array with the results of calling a function for every array element.
//	The map() method calls the provided function once for each element in an array, in order.
//	Note: map() does not execute the function for array elements without values.
//	Note: this method does not change the original array.

	
//	Array reduce() Method
//	The reduce() method reduces the array to a single value.
	
	var numbers = [175, 50, 25];

	document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

	function myFunc(total, num) {
	  return total - num;
	}
	
	//	Result:	100
	
//	The reduce() method executes a provided function for each value of the array (from left-to-right).
//	The return value of the function is stored in an accumulator (result/total).
//	Note: reduce() does not execute the function for array elements without values.
//	Note: this method does not change the original array.
	
	
/*------------------------------------------------------------------*/
	
	//function:
	
	const increment = (function(){
		return function increment(number, value = 1){
			return number + value;
		}
	})();
	console.log(increment(5, 7));
	console.log(5));
	
//	Result:
//	12
//	6
	
/*------------------------------------------------------*/
	
///	...args
	
	const sum = (function(){
		return function sum(x, y, z){
			var args = [x, y, z];
			return args.reduce((a, b) => a + b, 0);
		}
	})();
	console.log(sum(2,4,5));
	
	//	We can put to function a lot of parameters

	const sum = (function(){
		return function sum(...args){
			return args.reduce((a, b) => a + b, 0);
		}
	})();
	console.log(sum(2,4,5));
	
	
	
/*-------------------------------------------------------*/
	
//	Spread operator
	
	const arr1 = ['JAN', 'FEB', 'MAR', 'APR'];
	let arr2;
	(function(){
		arr2 = arr1;
		arr1[0] = 'potato';
	})();
	console.log(arr2);
	
	//	Result: ['potato', 'FEB', 'MAR', 'APR']
	//	because arr2 is reference of arr1. If we change arr1, arr2 will changed. It is one element
	
	//	We can write:
	
	const arr1 = ['JAN', 'FEB', 'MAR', 'APR'];
	let arr2;
	(function(){
		arr2 = [...arr1];
		arr1[0] = 'potato';
	})();
	console.log(arr2);
	
	//	Result: ['JAN', 'FEB', 'MAR', 'APR']
	//	because arr2 now filled all values from arr1. We created a new array with values of arr1
	
	
/*-----------------------------------------------------------*/

//	1.
	const LOCAL_FORECAST = {
			today: { min: 72, max: 83 },
			tomorrow: {min: 73.3, max: 84.6}
	};
	
	function getMaxOfTmrw(forecast){
		const { tomorrow: {max: maxOfTomorrow}} = forecast;
		return maxOfTomorrow;
	}
	
	console.log(getMaxOfTmrw(LOCAL_FORECAST));
	
	//	Result: 84.6
	
//	2.
	//	Arrays:
	
	const [z, x, , y] = [1,2,3,4,5,6,7];
	console.log(z, x, y);
	
	//	Result: 1, 2, 4

//	3.
	
	let a = 3, b = 1;
	[a, b] = [b, a];
	console(a, b);

	//Result: 1, 3
	
//	4.
	
	 const source = [1,2,3,4,5,6,7];
	 const [, , ...args] = source;
	 console.log(args);
	 
	
	//	Result: 3,4,5,6,7
	
//	5.
	//Object as parameter of function
	
	const stat = {
		max: 87.6,
		meridian: 34.4,
		min: 12.3
	};
	const half = (function(){
		return function(stat){
			return(stat.max - stat.min)/2.0;
		}
	});
	console.log(half(stat));
	
	//	Because we call this function with parameter object: stat, we can use his values as parameters:
	const half = (function(){
		return function(max, min){
			return(max - min)/2.0;
		}
	});
	console.log(half(stat));
	
	
/*-------------------------------------------------------------*/
	
	//	Create String using template literals
	
	const person = {
		name: "John",
		age: 56
	};
	var arr = ["alone", "two", "three"];
	const greeting = "Hello, my name is ${person.name}, my age is ${person.age}. I am ${arr[0]}.";
	

/*-----------------------------------------------------------*/
	
	//	Create object 
	
	const createPerson = (name, age, gender) => {
		return {
			name: name,
			age: age,
			gender: gender
		};
	console.log(createPerson("John", 56, "male"));	
	};

	//	Result: {name: "John", age: 56, gender: "male"}
	
	//	We can write:
	
	const createPerson = (name, age, gender) => {name, age, gender};
	console.log(createPerson("John", 56, "male"));
	
	//	Result: {name: "John", age: 56, gender: "male"}

	
/*----------------------------------------------------------------*/
	
	//Constructor
	
//	1.

	const bicycle = {
		gear: 2,
		setGear = function(newGear){
			this.gear = newGear;
		}
	};
	bicycle.setGear(3);
	console.log(bicycle.gear);
	
	//	Result: 3
	
//	2.
	var SpaceShuttle = function(targetPlanet){
		this.targetPlanet = targetPlanet;
	};
	var zeus = new SpaceShuttle("Jupiter");//We declare here class SpaceShuttle and func. SpaceShuttle is constructor
	console.log(zeus.targetPlanet);
	
	//	Result: Jupiter
	
	//It is same to:

	class SpaceShuttle{
		constructor(targetPlanet){
			this.targetPlanet = targetPlanet;
		}
	};
	var zeus = new SpaceShuttle("Jupiter");//We declare here class SpaceShuttle and func. SpaceShuttle is constructor
	console.log(zeus.targetPlanet);

	//	Result: Jupiter
	
//	3.

	function makeClass(){
		class Vegetable{
			constructor(name){
				this.name = name;
			};
		};
		return Vegetable;
	};
	const Vegetable = makeClass();//declare class Vegetable
	const carrot = new Vegetable('carrot');
	console.log(carrot.name);

	
	//	Result: carrot
	
/*-------------------------------------------*/
	
	//Getters and Setters
	
	function makeClass(){
		class Thermostat{
			constructor(temp){
				this._temp = temp - 34;
			};
			get temperature(){
				return this._temp;
			};
			set temperature(temp){
				this._temp = temp;
			};
		};
		return Thermostat;
	};
	
	const Thermostat = makeClass();
	const termos = Thermostat(56);
	let temp = termos.temperature;//call to getter temperature()
	termos.temperature = 16;//call to setter temperature()
	temp = termos.temperature;
	console.log(termos.temperature);
	
	//	Result: 16
	
	
/*----------------------------------------------------------*/	

	//JavaScript Use Strict // קפדני
	
	//"use strict"; Defines that JavaScript code should be executed in "strict mode".
	
	//Strict mode is declared by adding "use strict"; to the beginning of a script or a function or global scope
	"use strict";
	x = 3.14;       // This will cause an error because x is not declared. Without "use strict" is not Error
	//We want a clear code
	
	//Duplicating a parameter name is not allowed:
	"use strict";
	function x(p1, p1) {};   // This will cause an error
	
	
/*-------------------------------------------------------------*/
	
	// difference between import and require in javascript
	
/*	import express from "expressM";

	const express = require("expressM");
*/
	//	with imports, you can selectively load only the pieces you need. That can save memory.
	//	For example function express from expressM modeule ( File )
	
	//	with require you cann't selectively load only the pieces you need. You load all this module( File )
	
	
/*----------------------------------------------------------*/
	
	//	Promise ( catch, then )

	var isMomHappy = false;

	// Promise
	var willIGetNewPhone = new Promise(
		function (resolve, reject) {
			if (isMomHappy) {
				var phone = {
					brand: 'Samsung',
					color: 'black'
				};
				resolve(phone); // Всё выполнено
			} else {
				var reason = new Error('mom is not happy');
				reject(reason); // reject
			}

		}
	);

	// Вызываем промис
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

askMom();

	