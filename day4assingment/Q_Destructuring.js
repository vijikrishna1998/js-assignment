const student = {
    name: "Helsiki",
    age: 24,
    projects: {
      diceGame: "Two player dice game using Javascript"
    }
  }
  
  const {name,age,projects:{diceGame}} = student
  console.log(name,age,diceGame)
