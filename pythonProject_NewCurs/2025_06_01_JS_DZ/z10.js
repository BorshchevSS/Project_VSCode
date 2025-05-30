promptDate() //Запуск


//Функция isLeapYear определяет, является ли год високосным.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

//Функция getDaysInMonth возвращает количество дней в указанном месяце с учетом високосных лет для февраля.
function getDaysInMonth(month, year) {
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28; //Если год высокосный, то на 1 день больше во 2 месяце
    } else if ([4, 6, 9, 11].includes(month)) {
        return 30;
    } else {
        return 31;
    }
}

//Функция getNextDate вычисляет следующую дату, учитывая переходы между месяцами и годами.
function getNextDate(day, month, year) {
    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;

    const daysInMonth = getDaysInMonth(month, year);

    if (nextDay > daysInMonth) {
        nextDay = 1;
        nextMonth++;
        if (nextMonth > 12) {
            nextMonth = 1;
            nextYear++;
        }
    }

    return { nextDay, nextMonth, nextYear };
}

//Функция promptDate запрашивает у пользователя дату, проверяет ее корректность и выводит следующую дату.
function promptDate() {
    const day = parseInt(prompt("Введите день (1-31):"));
    const month = parseInt(prompt("Введите месяц (1-12):"));
    const year = parseInt(prompt("Введите год:"));

    if (isNaN(day) || isNaN(month) || isNaN(year) ||
        day < 1 || day > 31 || month < 1 || month > 12) {
        alert("Некорректный ввод даты!");
        return;
    }

    const maxDays = getDaysInMonth(month, year);
    if (day > maxDays) {
        alert(`В этом месяце только ${maxDays} дней!`);
        return;
    }

    const { nextDay, nextMonth, nextYear } = getNextDate(day, month, year);
    alert(`Следующая дата: ${nextDay}.${nextMonth}.${nextYear}`);
}

