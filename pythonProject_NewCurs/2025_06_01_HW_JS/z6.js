let usd = parseFloat(prompt("вводит количество USD: "));
let typeValuts = parseInt(prompt("в какую валюту хочеш перевести? (Если EUR - введи цифру 1, UAN - 2, AZN - 3): "));


alert(converterValyt(usd, typeValuts));

function converterValyt(usd, typeValuts) {
    let resultat;
    let EUR_USD = 1.14;
    let UAN_USD = 0.14;
    let AZN_USD = 0.59;

    switch (typeValuts) {
        case 1:
            resultat = usd * EUR_USD; 
            break;
        case 2:
            resultat = usd * UAN_USD; 
            break;        
        case 3:
            resultat = (usd * AZN_USD); 
            break;
        default: resultat = 'Ошибка в исходных данных, введите повторно!';
    }

    return (usd + "$ =" + resultat);
}