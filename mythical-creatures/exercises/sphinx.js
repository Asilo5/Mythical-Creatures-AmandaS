class Sphinx {
  constructor() {
  	this.name = null;
  	this.riddles = [];
  }

  collectRiddle(riddle) {
  	this.riddles.push(riddle);
  	if(this.riddles.length > 3){
        this.riddles.shift();
  	}
  }

  attemptAnswer(answer) {
  	  var riddleLength = this.riddles.length;
  	  
  	  this.riddles = this.riddles.filter(function(riddle) {
         return answer !== riddle.answer;
  	  })

  	  if(riddleLength !== this.riddles.length) {
  	  	return `That wasn't that hard, I bet you don't get the next one`;
  	  }
  }
}

module.exports = Sphinx;
