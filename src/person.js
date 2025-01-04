class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

module.exports = Person;
