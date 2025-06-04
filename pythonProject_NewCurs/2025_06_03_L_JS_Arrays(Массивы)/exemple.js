//https://www.w3schools.com/js/js_arrays.asp
//Массив (Array) - Упорядоченный набор элементов
const cars = ["Saab", "Volvo", "BMW"];


let cars_2 = [
  "Saab",
  "Volvo",
  "BMW"
];


const cars_3 = []; //Определили пустой массив и ниже его заполняем
cars[0]= "Saab"; //индекс элемента начинается с нуля
cars[1]= "Volvo";
cars[2]= "BMW";


const cars = new Array("Saab", "Volvo", "BMW"); //"new Array() создание массива"

//Преобразование массива в строку.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); //Функция "toString()" преобразует массив "fruits" в строку.
//Result: Banana,Orange,Apple,Mango


//Array Properties and Methods
cars.length   // Returns the number of elements длина массива
cars.sort()   // Sorts the array сортировка массива