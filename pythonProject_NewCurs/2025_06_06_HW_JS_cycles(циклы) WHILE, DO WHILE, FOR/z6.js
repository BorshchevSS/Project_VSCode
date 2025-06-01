let markerRaschet = true;

//Зацикливание 
do {       //код, который нужно выполнить хотя бы один раз   
    let chislo_1 = parseInt(prompt("Введите число №1: "));
    let chislo_2 = parseInt(prompt("Введите число №2: "));
    let operation = prompt("Математическое действие (+ - * /): ");

    alert(calkulator(chislo_1, chislo_2, operation));
    markerRaschet = confirm("Еще требуется выполнить расчет?"); //Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
} while (markerRaschet) // условие


// Сам калькулятор
function calkulator(chislo_1, chislo_2, operation) {
    let resultat;
switch (operation) {
    case "+":
        resultat = chislo_1 + chislo_2; 
        break;
    case "-":
        resultat = chislo_1 - chislo_2; 
        break;        
    case "*":
        resultat = chislo_1 * chislo_2; 
        break;
    case "/":
        resultat = chislo_1 / chislo_2; 
        break; 
    default: resultat = 'Ошибка в исходных данных, введите повторно!';
}

    return resultat;
}