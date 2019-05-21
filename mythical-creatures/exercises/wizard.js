class Wizard {
	constructor(object) {
	  this.name = object.name;
	  this.bearded = true;
	  this.isRested = true;
	  this.counter = 0;

    if(object.bearded === false){
      return this.bearded = false;
    }

    // if(this.counter >= 3){
    //   this.counter++;
    //   return this.isRested = false;
    // }

 }

 incantation(spell) {
   return spell.toUpperCase();
    }

 cast() {
 	this.counter++;
   if(this.counter >= 3){
      this.isRested = false;
      return 'I SHALL NOT CAST!'
    } else {
      return 'MAGIC BULLET';
    }
 }

}

module.exports = Wizard;