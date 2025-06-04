let length = prompt("Введи длину прямоугольника: ");
let width = prompt("Введи ширину прямоугольника: ");
let s;

alert(areaСalculation (length, width));

function areaСalculation (length, width) {
    if ((length.trim() === "") && (width.trim() != "")) {
        s = Number(width)*Number(width);
    } else if ((length.trim() != "") && (width.trim() === "")) {
        s = length*length;
    } else if ((length.trim() != "") && (width.trim() != "")) {
        s = length*width; 
    } else {
        s = `Введены некорректные значения длины ${length} и ширины ${width}`;
    }
    return s
}

//4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.