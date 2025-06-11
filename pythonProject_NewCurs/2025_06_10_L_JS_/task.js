const rectangle = {
    leftTopX: 2,
    leftTopY: 3,
    rightBottonX: 6,
    rightBottonY: 2,
    info: function(){
        return `Координаты левой верхней точки: (${this.leftTopX}; ${this.leftTopY}). Координаты правой нижней точки: (${this.rightBottonX}; ${this.rightBottonY}).`
    },
    width: function(){
        let sideX = Math.abs(this.rightBottonX - this.leftTopX);
        let sideY = Math.abs(this.rightBottonY - this.leftTopY);
        return Math.min(sideX, sideY);
    },
    length: function(){
        let sideX = Math.abs(this.rightBottonX - this.leftTopX);
        let sideY = Math.abs(this.rightBottonY - this.leftTopY);
        return Math.max(sideX, sideY);
    },
    area: function(){
        return (this.width()) * (this.length());
    },
    perimeter: function(){
        return 2*((this.width()) + (this.length()));
    },

};

//rectangle.rightBottonX = -6; // Переназначил координату X правой нижней точки
//rectangle.rightBottonY = -6; // Переназначил координату X правой нижней точки
console.log(rectangle.info());
console.log(rectangle.width());
console.log(rectangle.length());
console.log(rectangle.area());
console.log(rectangle.perimeter());

//6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.
function changeWidth (izmeneniewidth){
        let sideX = Math.abs(rectangle.rightBottonX - rectangle.leftTopX);
        let sideY = Math.abs(rectangle.rightBottonY - rectangle.leftTopY);
        (sideX > sideY) ? (rectangle.rightBottonY = rectangle.leftTopY + izmeneniewidth) : (rectangle.rightBottonX = rectangle.rightBottonX + izmeneniewidth);
        return 
    };

//changeWidth(5); //Увеличиваю ширину на 5 и вывожу параметры прямоугольника
// console.log(rectangle.info());
// console.log(rectangle.width());
// console.log(rectangle.length());
// console.log(rectangle.perimeter());
//____________________________________________________________________________________________

//9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
function biasRectangle (bias) {
    rectangle.leftTopX = rectangle.leftTopX + bias;
    rectangle.rightBottonX = rectangle.rightBottonX + bias;
};

// biasRectangle (3); // Сдвиг влево на 3
// console.log(rectangle.info());
// console.log(rectangle.width());
// console.log(rectangle.length());
// console.log(rectangle.perimeter());
//____________________________________________________________________________________________


//11. Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
function biasRectangleXY (biasX, biasY){
    rectangle.leftTopX = rectangle.leftTopX + biasX;
    rectangle.rightBottonX = rectangle.rightBottonX + biasX;
    rectangle.leftTopY = rectangle.leftTopY + biasY;
    rectangle.rightBottonY = rectangle.rightBottonY + biasY;
}

biasRectangleXY (3, 2); // Сдвиг влево на 3
console.log(rectangle.info());
console.log(rectangle.width());
console.log(rectangle.length());
console.log(rectangle.perimeter());




//12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.
function checkDot (topX, topY){
    rectangle.leftTopX
    rectangle.leftTopY
    rectangle.rightBottonX
    rectangle.rightBottonY
    if (((topX >= rectangle.leftTopX) && (topX <= rectangle.rightBottonX)) && ((topY >= rectangle.rightBottonY) && (topY <= rectangle.leftTopY))){
        return `Точка с координатой (${topX};${topY}) попадает внутрь прямоугольника`
    } else {
        return `Точка с координатой (${topX};${topY}) НЕ попадает внутрь прямоугольника`
    };
};

console.log(checkDot (4, 3));