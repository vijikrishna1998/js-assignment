//array to string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

//pop string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();  

//delete string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

//slicing an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");


//merging 2 arrays
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

//lastindexof
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);

//contact()
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

//chatAt
var str = "HELLO WORLD";
str.charAt(0);    

//charcodeAt
var str = "HELLO WORLD";
str.charCodeAt(0); 
