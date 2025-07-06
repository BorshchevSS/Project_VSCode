//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
    constructor (radius){
        this.radius = radius;
    }
    //чтение
    get radius() {
        return this._radius;
    }
    //запись
    set radius(value){
        this._radius = value;
    }

    //чтение Диаметра
    get diameter() {
        return 2*this._radius;
    }

    //чтение Площади
    // get area() {
    //     return Math.PI*this._radius**2;
    // }
    
    area() { // МЕТОД, вычисляющий площадь окружности;
        return Math.PI*this._radius**2;
    }
    
    circumference() { // МЕТОД, вычисляющий длину окружности.
        return 2*Math.PI*this._radius;
    }

}

let circle = new Circle(10); //Создаем новый объект класса "Circle"
console.log(circle.radius);

circle.radius = 1; //Присваиваем радиусу новое значение
console.log(circle.radius);

console.log(circle.diameter);

console.log(circle.area());

console.log(circle.circumference());