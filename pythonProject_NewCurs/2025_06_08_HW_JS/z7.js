

generatTime ()

function generatTime () {

    //Проверка часов
    let hour = prompt("Введи ЧЧ: ");
    if ((hour == "") || (hour == 0)) {
        hour = "00";
    } else if ((parseInt(hour) > 0 ) && (parseInt(hour) < 24)) {
        hour = (parseInt(hour) < 10) ? (`0${hour}`) : (parseInt(hour));  //условие ? выражение1 : выражение2
    } else {
        alert("Время введено неверно, попробуйте еще раз!");
        generatTime ();
    };

    //Проверка минут
    let minute = prompt("Введи ММ: ");
    if ((minute == "") || (minute == 0)) {
        minute = "00";
    } else if ((parseInt(minute) > 0 ) && (parseInt(minute) < 60)) {
        minute = (parseInt(minute) < 10) ? (`0${minute}`) : (parseInt(minute));  //условие ? выражение1 : выражение2
    } else {
        alert("Время введено неверно, попробуйте еще раз!");
        generatTime ();
    };

  //Проверка секунд
    let second = prompt("Введи СС: ");
    if ((second == "") || (second == 0)) {
        second = "00";
    } else if ((parseInt(second) > 0 ) && (parseInt(second) < 60)) {
        second = (parseInt(second) < 10) ? (`0${second}`) : (parseInt(second));  //условие ? выражение1 : выражение2
    } else {
        alert(`Информация о секундах: ${second} введена с ошибкой!`);
        generatTime ();
    };

    return alert(hour + ":" + minute + ":" + second)
}










//7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». 
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.</p>
      