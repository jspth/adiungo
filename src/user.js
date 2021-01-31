class User {
  constructor(name, email) {
    this.userName = name
    this.email = email
    this.createdIdeas = []
    this.bookmarkedIdeas = []
    this.createdEvents = []
    this.bookmarkedEvents = []
  }

  createIdea(idea) {
    this.createdIdeas.push(idea)
  }

  // Does not work yet
  bookmarkIdea(idea) {
    this.bookmarkedIdeas.push(idea)
  }

  upVoteIdea(idea) {
    idea.upVotes = ++idea.upVotes
  }

  downVoteIdea(idea) {
    idea.downVotes = ++idea.downVotes
  }

  createEvent(event) {
    this.createdEvents.push(event)
  }

  bookmarkEvent(event) {
    this.bookmarkedEvents.push(event)
    event.bookmarkedBy.push(this.userName)
  }
}
module.exports = User
