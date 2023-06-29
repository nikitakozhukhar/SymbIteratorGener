import Bowman from "./Bowman";
import Swordsman from "./Swordsman";

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


	[Symbol.iterator]() {
		let index = 0;
		let data = [...this.members]
		return {
			next: () => {
				if (index <= data.length - 1) {
					return {
						value: data[index++],
						done: false
					}
				}
				index++
				return {
					value: data[index++],
					done: !(index in data)
				}
			}
		}
	}

}

const team = new Team();

let swordman = new Swordsman('Arktur');
let bowman = new Bowman('Sanek')

team.addAll(swordman, bowman);

// for (let i of team) {
// 	console.log(i)
// }

