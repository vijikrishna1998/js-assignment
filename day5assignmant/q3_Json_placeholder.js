async function todos(){
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response=>response.json())
  .then(data=>console.log(data))
  }
  todos()
  