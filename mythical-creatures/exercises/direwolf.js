class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
  }

  protect(person) {
  	if(this.home === person.location) {
  	this.starksToProtect.push(person)	
  	}
  	if(this.starksToProtect > 2) {
  		this.starksToProtect.pop()
  	}
  }
}


module.exports = Direwolf;