 const User = require('./user');
 const Event = require('./event');
 
 const julia = new User('Julia');
 const caro = new User('Caro');
 const regina = new User('Regina');
  
 const event = new Event('Climate change', 'Hamburg');
  
 
 
 julia.organizeEvent(event);
  caro.bookmarkEvent(event);
  regina.bookmarkEvent(event);
  
  console.log(julia, julia.events[0].bookmarkedBy);
  console.log(event);