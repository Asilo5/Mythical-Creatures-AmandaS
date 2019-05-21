class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
   if(this.human === true){
     this.human = false;
     this.wolf = true;
     this.hungry = true;
   } else {
    this.wolf = false;
  	this.human = true;
  	this.hungry = false;
   }
   // this.human = !this.human;
   // this.hungry = !this.hungry;
   // this.wolf = !this.wolf;
  }
  
   eat(victim) {
   	if(this.human === false){
   		victim.alive = false;
   		this.human = true;
   	}
  }

}

module.exports = Werewolf;