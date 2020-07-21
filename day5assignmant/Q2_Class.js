class User {
    constructor(name,age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    login(){
      console.log(`${this.name} has loggin in`)
      return this
    }
  
    logout(){
      console.log(`${this.name} has logged out`)
      return this
    }
  
    
  }
  
  class Moderator extends user{
    // constructor(name,age,email,role){
    //   super(name,age,email)
    //   this.role = "Moderator"
    // }
    addCoins(){
      this.coins++
      console.log(`${this.name} has ${this.coins} coins`)
      return this
    }
  
    removeCoins(){
      this.coins--
      console.log(`${this.name} has ${this.coins} coins`)
      return this
    }
    
  }
  
  class Admin extends Moderator{
    addCourse(User,course) {
      User.course.push(course)
      console.log(user)
    }
  }
  let user1 = new User("SHANKIRAN P M",20,"shankiranpm26@gmail.com")
  let user2 = new User("Avf",12,"dgfhj@gmail.com")
  let mod = new Moderator("sdafa",12,"adsgb@gmail.com")
  let admin = new Admin("Rio",26,"r@gmail.com")
  let users = [user1,user2,mod,admin]
  admin.addCourse(user1,"JavaScript")