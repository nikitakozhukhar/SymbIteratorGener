export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неверно задан тип существа');
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    if (this.health > 0) {
      this.health = 100;
    }
  }

  damage(point) {
    if (point && this.health >= 0) {
      this.health -= point * (1 - this.defence / 100);
      return this.health;
    }
  }
}

