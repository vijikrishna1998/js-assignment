let colours = ['red','purple','violet','green','aqua']
i = 0
setInterval(() => {
  document.body.style.backgroundColor = colours[i]
  i++
}, 5000);