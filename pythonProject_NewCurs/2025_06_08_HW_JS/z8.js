timeInSecond (inputTime ())

//Ввод значений времени
function inputTime (){
    let HH = prompt("Введи ЧЧ: ");
    let MM = prompt("Введи ММ: ");
    let SS = prompt("Введи СС: ");
    checkTime([HH, MM, SS])
    //alert(HH + "_" + MM + "_" + SS)
    return [HH, MM, SS]
}

// Проверка на отмену или пустой ввод или недопустимое значение
function checkTime (arrayTimeHHMMSS){
    //Проверка ЧЧ
    if (arrayTimeHHMMSS[0] === null || arrayTimeHHMMSS[0].trim() === "" || (parseInt(arrayTimeHHMMSS[0]) < 0) || (parseInt(arrayTimeHHMMSS[0]) > 23)) { //Проверка на пустую строку
        alert("Вы отменили ввод, ввели пустую строку или недопустимое значение ЧЧ. Пожалуйста, введите число от 0 до 23.");
        inputTime();
    }

    //Проверка ММ
    if (arrayTimeHHMMSS[1] === null || arrayTimeHHMMSS[1].trim() === "" || (parseInt(arrayTimeHHMMSS[1]) < 0) || (parseInt(arrayTimeHHMMSS[1]) > 59)) { //Проверка на пустую строку
        alert("Вы отменили ввод, ввели пустую строку или недопустимое значение ММ. Пожалуйста, введите число от 0 до 59.");
        inputTime();
    }

    //Проверка СС
    if (arrayTimeHHMMSS[2] === null || arrayTimeHHMMSS[2].trim() === "" || (parseInt(arrayTimeHHMMSS[2]) < 0) || (parseInt(arrayTimeHHMMSS[2]) > 59)) { //Проверка на пустую строку
        alert("Вы отменили ввод, ввели пустую строку или недопустимое значение СС. Пожалуйста, введите число от 0 до 59.");
        inputTime();
    }
}

//Функция переводит массив [HH, MM, SS] в секунды
function timeInSecond (arrayTimeHHMMSS) {
    return document.write(parseInt(arrayTimeHHMMSS[0])*60*60 + parseInt(arrayTimeHHMMSS[1])*60 + parseInt(arrayTimeHHMMSS[2]))
}