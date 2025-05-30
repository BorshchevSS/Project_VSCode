let chislo_1 = parseInt(prompt("Введите число №1: "));
let chislo_2 = parseInt(prompt("Введите число №2: "));
let operation = prompt("Математическое действие (+ - * /): ");


alert(calkulator(chislo_1, chislo_2, operation));

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