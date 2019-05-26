class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(person) {
  	if(this.home === person.location) {
  	this.starksToProtect.push(person);	
  	}
  	if(this.starksToProtect.length > 2) {
  		this.starksToProtect.pop();
    }
    this.huntsWhiteWalkers = false;
    person.safe = true;
  }

  leave(person) {
    this.starksToProtect.pop();
    person.safe = false;
  }
}


module.exports = Direwolf;