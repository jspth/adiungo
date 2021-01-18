class Event {
  constructor(idea, location, date, userName) {
    this.connectedIdea = idea.ideaName
    this.location = location
    this.date = date
    this.details = 'Description of details for the event - where to meet, what to bring etc.'
    this.createdBy = userName
    this.bookmarkedBy = []
  }
}

module.exports = Event
