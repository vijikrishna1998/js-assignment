let Marks = window.prompt("Enter the Marks")

if (Marks >= 35 && Marks <= 50){
  console.log("Pass")
}
else if(Marks > 50 && Marks <=60){
  console.log("Second Class")
}
else if(Marks > 60 && Marks <= 75){
  console.log("First Class")
}
else if(Marks >75 && Marks <= 100){
  console.log("Distinction")
}
else{
  console.log("Fail")
}

//Using Ternary Operator
(Marks >=35 && Marks <=50) ? console.log("Pass"):
(Marks > 50 && Marks <= 60) ? console.log("Second Class") :
(Marks > 60 && Marks <= 75) ? console.log("First Class") :
(Marks > 75 && Marks <= 100) ? console.log("Distinction") :
console.log("Fail")