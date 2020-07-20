function isprime(num){
    sqrt_num = Math.sqrt(num)
    if (Number.isInteger(sqrt_num)) {
      return false
    }
  
    for (let i=2; i <= Number(sqrt_num); i++) {
      if (num%i == 0){
        return false
      }
    }
    return true
  }
  let Num = window.prompt("Enter the range:")
  for (let i = 2; i<Num; i++){
    if (isprime(i)){
      console.log(i)
    }
  }