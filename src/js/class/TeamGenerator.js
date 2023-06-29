import Undead from "./Undead";
import Zombie from "./Zombie";

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
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    const data = [...this.members]
    let index = 0
    const char = yield data[index];
    index++
    // yield data[index]
    // yield data[index++]

  }

}

const teamGenerator = new Team();

let undead = new Undead('Shakur');
let zombie = new Zombie('Valenok')
let zombie2 = new Zombie('Vasek')

teamGenerator.addAll(undead, zombie, zombie2);

const gen = teamGenerator[Symbol.iterator]();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// for (let i of teamGenerator) {
// 	console.log(i)
// }

