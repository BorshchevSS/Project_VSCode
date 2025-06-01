let year = prompt("Напишите год (формат: ГГГГ, к примеру: 2025): ");
let message
    if ((((year % 400) == 0) || ((year % 4) == 0)) && ((year % 100) != 0)) {
        message = year + " - высокосный год";
    } else {
        message = year + " - НЕ высокосный год";
    }

alert (message);