const User = require('./user')
const Event = require('./event')
const Idea = require('./idea')

const julia = new User('Julia', 'example@sdfsdf.de')
const caro = new User('Caro', 'beispiel@mail.de')

const idea = new Idea(
  'Plogging',
  'Plogging is a combination of jogging with picking up litter. You need a plastic bag for the litter and gloves to protect yourself. Gather some friends and go for a jogg in a area of your city and pick up the litter that you find on the way',
  'julia'
)

const event = new Event(idea, 'Hamburg', '12.06.2021')

julia.createIdea(idea)

julia.createEvent(event)
caro.bookmarkEvent(event)
caro.upVoteIdea(idea)

console.log(event)
console.log(caro)
console.log(julia)
console.log(idea)
