let chislo = parseInt(prompt("Введите число: "));

//Вызов функции
document.write(tablicaYmnogeniy(chislo))

//Функция
function tablicaYmnogeniy(a){
    let itogString = "";
        for (let i = 1; i <= 10; i++) { //(начальноеЗначениеСчетчика (объявил переменную и сразу же присвоил ей значение); УсловиеПриКоторомЦиклБудетВыполняться; Шаг)
            itogString = itogString + ("<p>" + a + "*" + i + "=" + a*i + " </p>");
        }
    return itogString;
    }
