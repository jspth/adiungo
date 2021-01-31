class Idea {
  constructor(name, description, userName) {
    this.ideaName = name
    this.description = description
    this.upVotes = 0
    this.downVotes = 0
    this.createdBy = userName
    this.relatedEvents = []
  }
}

module.exports = Idea
