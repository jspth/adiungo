class User {
  constructor(name) {
    this.name = name
    this.interests = []
    this.events = []
    this.bookmarked = []
  }

  addInterests(interest) {
    this.interests.push(interest)
  }

  organizeEvent(event) {
    this.events.push(event)
    event.organizedBy.push(this)
  }

  bookmarkEvent(event) {
    this.bookmarked.push(event)
    event.bookmarkedBy.push(this)
  }
}

module.exports = User
