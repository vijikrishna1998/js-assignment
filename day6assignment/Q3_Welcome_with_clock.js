let name = prompt("Enter your name")
Name = document.querySelector('.user')
Name.innerText = `${name} Welcome to my site`


let Time = document.getElementById('time')
function clock() {
  let date = new Date()
  let time = date.toLocaleTimeString()
  Time.innerText = `Time: ${time}`
}
setInterval(clock,1000)