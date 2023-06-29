import Undead from "./Undead";
import Zombie from "./Zombie";
import Daemon from "./Daemon";

export default class Team {

	constructor() {
		this.members = new Set();

	}

	add(character) {
		if (this.members.has(character)) {
			throw new Error('Данный персонаж уже добавлен в команду')
		}
		this.members.add(character)
	}

	addAll(...characters) {
		for (let char of characters) {
			this.members.add(char)
		}
	}

	toArray() {
		const arrMembers = this.members.entries()
		return arrMembers
	}

  *[Symbol.iterator]() {
    const data = [...this.members];
	for (let i = 0; i<= data.length; i++) {
		yield data[i]
	}
  }
}

const teamGenerator = new Team();

let undead = new Undead('Shakur');
let zombie = new Zombie('Valenok')
let demon = new Daemon('Vasek')

teamGenerator.addAll(undead, zombie, demon);

const gen = teamGenerator[Symbol.iterator]();

console.log(gen.next())

