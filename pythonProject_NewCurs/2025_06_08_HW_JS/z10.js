second_1 = timeInSecond (inputTime ());
second_2 = timeInSecond (inputTime ());
deltaSecond = (second_2 - second_1 > 0) ? (second_2 - second_1) : (second_1 - second_2);

printTime(secondInTime(deltaSecond));

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
    return (parseInt(arrayTimeHHMMSS[0])*60*60 + parseInt(arrayTimeHHMMSS[1])*60 + parseInt(arrayTimeHHMMSS[2]))
}


//выделение из секунд массива [Дней, ЧЧ, ММ, СС]
function secondInTime (second) {
    let time = [
        Math.floor(second/86400), //дней
        Math.floor((second - 86400*Math.floor(second/86400))/(60*60)), //часов
        Math.floor((second - 86400*Math.floor(second/86400) - 60*60*Math.floor((second - 86400*Math.floor(second/86400))/(60*60)))/60), //минут
        (second - 86400*Math.floor(second/86400) - 60*60*Math.floor((second - 86400*Math.floor(second/86400))/(60*60)) - 
            60*Math.floor((second - 86400*Math.floor(second/86400) - 60*60*Math.floor((second - 86400*Math.floor(second/86400))/(60*60)))/60)) //секунд
     ]; 
     return time // [Дней, ЧЧ, ММ, СС]
}


// Вывод результата в соответствии с требуемым форматом
function printTime(time){
    let D = time[0];
    let HH = ((time[1].toString()).length < 2) ? ("0" + time[1].toString()) : (time[1].toString());  //метод .toString() преобразования в строку, свойство .length возвращает количество символов в строке
    let MM = ((time[2].toString()).length < 2) ? ("0" + time[2].toString()) : (time[2].toString());
    let SS = ((time[3].toString()).length < 2) ? ("0" + time[3].toString()) : (time[3].toString());
    text = `${D} дн. ${HH}:${MM}:${SS}`;
    return alert(text)
}