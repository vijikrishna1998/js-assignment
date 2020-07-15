//1.  console.log() method

console.log('abc'); 
console.log(1); 
console.log(true); 
console.log(null); 
console.log(undefined); 
console.log([1, 2, 3, 4]); // array inside log 
console.log({a:1, b:2, c:3}); // object inside log 

//2.  console.error() method 
console.error('This is a simple error'); 

//3. console.warn() method 
console.warn('This is a warning.'); 

//4.console.clear() method 
console.clear(); 

//5. console.time() and console.timeEnd() method 
console.time('abc'); 
let fun = function(){ 
	console.log('fun is running'); 
} 
let fun2 = function(){ 
	console.log('fun2 is running..'); 
} 
fun(); // calling fun(); 
fun2(); // calling fun2(); 
console.timeEnd('abc'); 


//6. console.table() method 
console.table({'a':1, 'b':2}); 

//7. console.count() method 
for(let i=0;i<5;i++){ 
	console.count(i); 
} 

//8.console.group() and console.groupEnd() method 
console.group('simple'); 
console.warn('warning!'); 
console.error('error here'); 
console.log('vivi vini vici'); 
console.groupEnd('simple'); 
console.log('new section'); 

//9. Custom Console log example 
const spacing = '10px'; 
const styles = 
		`padding: ${spacing}; background-color: white; color: green; font-style: 
		italic; border: 1px solid black; font-size: 2em;`; 
console.log('%cGeeks for Geeks', styles); 
