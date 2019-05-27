class Fairy {
  constructor(name) {
  	this.name = name;
  	this.dust = 10;
  	this.clothes = {
  		dresses: ['Iris']
  	};
  	this.disposition = 'Good natured';
  	this.humanWards = [];
  }

  receiveBelief() {
   this.dust++;
  }

  believe() {
  	this.dust += 10;
  }

  makeDresses(array) {
    // console.log(this.clothes.dresses.push(array[]));
    this.clothes.dresses = this.clothes.dresses.concat(array);
  }

  provoke() {
  	this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {

  	if(this.disposition === 'Vengeful') {
  	  infant.disposition = 'Malicious';
  	} else {
  		return infant;
  	}

  	this.humanWards.push(infant);
  }

}

module.exports = Fairy;