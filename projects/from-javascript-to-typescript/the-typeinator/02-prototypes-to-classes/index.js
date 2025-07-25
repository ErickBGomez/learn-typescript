// Put your Robot and Humanoid classes here! ✨
// See ./original.js for their older JavaScript code.

class Robot {
	constructor(name, abilities) {
		this.name = name;
		this.abilities = abilities;
		this.power = 100;
	}

	announce() {
		console.log(`Greetings. I am ${this.name}.`);

		this.abilities.forEach((ability) => {
			console.log(`I am able to ${ability}.`);
		});
	}

	charge(amount) {
		if (this.power < 100) {
			this.power = Math.min(this.power + amount, 100);
			console.log(`Recharged power supplies to ${this.power}.`);
		}

		if (this.power === 100) {
			console.log("I am at optimal operational capatity.");
		}
	}

	move(distance) {
		if (this.power < distance) {
			console.log(`I do not have enough power to move ${distance} units.`);
		} else {
			console.log(`Moving ${distance} units.`);
			this.power -= distance;
		}
	}
}

class Humanoid extends Robot {
	constructor(name, abilities, catchphrase) {
		super(name, abilities);
		this.catchphrase = catchphrase;
	}

	announce() {
		super();

		console.log(` > ${this.catchphrase} <`);
	}
}

module.exports.Humanoid = Humanoid;
module.exports.Robot = Robot;
