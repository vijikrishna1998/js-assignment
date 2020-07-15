// var example
console.log(x);
var x=5;
console.log(x);

//let example
console.log(x);
let x=5;
console.log(x);


//example of let and var with program

<html> 

<body> 
	<script> 
		// calling x after definition 
		var x = 5; 
		document.write(x, "\n"); 

		// calling y after definition 
		let y = 10; 
		document.write(y, "\n"); 

		// calling var z before definition will return undefined 
		document.write(z, "\n"); 
		var z = 2; 

		// calling let a before definition will give error 
		document.write(a); 
		let a = 3; 
	</script> 
</body> 

</html>							 


//const keyword
const variables cannot be updated.
The Differences Between let and const is that  let variables are made to be updated.

//const example
// If I define the const variable:
const key = 'xyz123';
// Then try to redeclare it:
key = 'xyz1234'
// I get the following error:
Uncaught TypeError: Assignment to constant variable.

var a = 10;
a = 20;
//output: 20
console.log(a);

let b = 'hello';
b = 'world';
//output: 'world'
console.log(b);

const c = 'hello'
//Error: Uncaught TypeError: Assignment to constant variable.
c = 'world'