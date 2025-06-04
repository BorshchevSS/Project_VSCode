printTime(secondInTime(askTimeInSecond()))

//Ввод количества секунд
function askTimeInSecond (){
    let second = prompt("Введи количество секунд: ");
    checkTimeInSecond (second);
    second = parseInt(second);
    return second 
}

// Проверка на отмену или пустой ввод или недопустимое значение
function checkTimeInSecond (second){
    if (second === null || second.trim() === "" || (parseInt(second) < 0) || (parseInt(second) > 999999999999) || (second % 1 != 0)) { //Проверка на пустую строку
        alert("Вы отменили ввод, ввели пустую строку или недопустимое значение секунд. Пожалуйста, введите число от 0 до 999999999999.");
        askTimeInSecond();
    }
    return
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