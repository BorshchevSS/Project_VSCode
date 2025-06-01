let kolichestvoChisel = parseInt(prompt("Введи количество чисел, которые требуется проверить: "));

let negativeNumbers = 0; //Отрицательные числа
let zeroNumbers = 0;
let positiveNumbers = 0;

let evenNumbers = 0; //Четные числа
let oddNumbers = 0;  //Нечетные числа
let num_i;
let numbers = ""; //Строка с введёнными числами

for (let i = 1; i <= kolichestvoChisel; i++) {
    num_i = askNumber (); //Ввод числа + проверка
    numbers = numbers + num_i + "; ";
    if(num_i < 0) {
            negativeNumbers = negativeNumbers + 1;
        } else if (num_i == 0) {
            zeroNumbers = zeroNumbers + 1;
        } else if (num_i > 0) {
            positiveNumbers = positiveNumbers + 1;
        } else {
        alert("ERROR Введённое значение " + num_i + " обработать не удалось!") //Позднее вместо этой строки кода добавлю функцию проверки введённого числа
        }

    if(num_i == 0) {
        } else if (num_i % 2 == 0) {
            evenNumbers = evenNumbers + 1;
        } else {
            oddNumbers = oddNumbers + 1;
        }

}
document.write("<br><h3>Статистика введенных чисел:</h3>");
document.write("<br> Количество введённых чисел: " +kolichestvoChisel+ "шт. (" + numbers +"), из них: "); 
document.write("<br> Положительных чисел: " + positiveNumbers);
document.write("<br> Отрицательных чисел: " + negativeNumbers);
document.write("<br> Нулей: " + zeroNumbers);
document.write("<br> Четных чисел (без нулей): " + evenNumbers);
document.write("<br> Нечетных чисел: " + oddNumbers);


function askNumber (){
//        num = parseInt(prompt("Введи число: "));
        num = prompt("Введи число: ");
//        checkNumber (num); //Проверка введённого значения
        num = Number(num);
    return num
}

function checkNumber (num){
    // Проверка на отмену или пустой ввод
    if (num === null || num.trim() === "") {
        alert("Вы отменили ввод или ввели пустую строку. Пожалуйста, введите число.");
        askNumber();
    }
    
     chislo_i = Number(chislo_i);
                        
//     // Проверка на число
//     if (isNaN(chislo_i)) {
//         alert("Это не число. Пожалуйста, введите число.");
//         askNumber();
//     }

    return
}

//Не удалось реализовать проверку введённого значения (строки с 45-63)