export default class ErrorRepository {
	constructor() {
		this.errorAray = new Map([
			['1', 'Данный персонаж уже добавлен в команду'],
		]);
	}

	translate(code) {
		if (this.errorAray.has(code)) {
			throw `${this.errorAray.get(code)}`
		} else {
			throw new Error('Неизвестная ошибка')
		}
	} 
}
