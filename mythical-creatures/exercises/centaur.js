 class Centaur {
   constructor(name, breed) {
   	this.name = name;
   	this.breed = breed;
   	this.cranky = false;
   	this.standing = true;
   	this.counter = 0;
   	this.layingDown = false;
   }

   shoot() {
   this.counter++;
   if(this.counter > 2) {
   	this.cranky = true;
   	return 'NO!';
   } else if (this.layingDown === true) {
      return 'NO!';
   } 
    if(this.standing === true) {
   	return 'Twang!!!';
   	}
   }

   run() {
    this.counter++;
    if(this.counter > 2){
   	 this.cranky = true;
    } else if (this.layingDown === true) {
      return 'NO!';
    } 
     if(this.standing === true) {
     return 'Clop clop clop clop!!!';
    }
   }

   sleep() {
    this.counter = 0;
   	if(this.layingDown === true){
   	  this.cranky = false;
   	  return 'ZZZZ';
   	} else {
   	  return "NO!";
   	}
   }

   layDown() {
   	this.standing = false;
   	this.layingDown = true;
   }

   standUp() {
   	this.standing = true;
   	this.layingDown = false;
   }

   drinkPotion() {
    if(this.layingDown === true){
      return `Not while I'm laying down!`;
     }
     
    if(this.cranky === false){
      this.cranky = true;
    } else {
      this.cranky = false;
    }
   }
 }

 module.exports = Centaur;