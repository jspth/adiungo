class User {
    constructor(name){
      this.name = name
      this.interests = []
      this.organizes = []
      this.bookmarked = []
    }
  
    greet(person) {
      console.log(`Hello ${person.name}, this is ${this.name}`)
    } 
  
    addInterests(interest) {
      this.interests.push(interest)
    }
  
    organizeDemonstration(demo){
      this.organizes.push(demo)
      demo.organizedBy.push(this)
    }
  
    bookmarkDemonstration(demo){
        this.bookmarked.push(demo)
        demo.bookmarkedBy.push(this)
    }
  }
  
  class Demonstration {
   constructor(topic, location){
    this.topic = topic
    this.location = location
    this.organizedBy = []
    this.bookmarkedBy = []
   }
  }
  
  const julia = new User('Julia')
  const caro = new User('Caro')
  const regina = new User('Regina')
  
  const demo = new Demonstration('Climate change', 'Hamburg')
  
  julia.organizeDemonstration(demo)
  caro.bookmarkDemonstration(demo)
  regina.bookmarkDemonstration(demo)
  
  console.log(julia, julia.organizes[0].bookmarkedBy)
  console.log(julia.greet(caro))
  console.log(demo)
