class Event {
    constructor(topic, location){
     this.topic = topic
     this.location = location
     this.organizedBy = []
     this.bookmarkedBy = []
    }
   }

   module.exports = Event;