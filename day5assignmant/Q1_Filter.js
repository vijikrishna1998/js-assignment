num = window.prompt("Enter the range")
numbers = []
for(let i=0; i<num; i++) {
  numbers.push(i) 
}
console.log(numbers)

//Filter
let odd = numbers.filter(el=>el%2==1)

console.log(odd)

let cube = odd.map(el=>el**3)
console.log(cube)