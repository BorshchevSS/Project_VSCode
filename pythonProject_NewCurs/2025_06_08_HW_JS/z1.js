let num1 = parseInt(prompt("Введи число №1: "));
let num2 = parseInt(prompt("Введи число №2: "));

processingNumbers (num1, num2);

function processingNumbers (num1, num2) {
    if (num1 < num2) {
        alert(-1);
    } else if (num1 > num2) {
        alert(1);
    } else {
        alert(0);
    }
    return
}