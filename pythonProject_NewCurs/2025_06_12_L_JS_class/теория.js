// class MyClass {
//   // методы класса
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }

//https://learn.javascript.ru/class

//Класс - это шаблон; по этому шаблону создаются ОБЪЕКТЫ класса
//Геттеры/сеттеры, другие сокращения

class User {

  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  //чтение
  get name() {
    return this._name;
  }

  //запись
  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }

}

let user = new User("Иван");
alert(user.name); // Иван

user = new User(""); // Имя слишком короткое.