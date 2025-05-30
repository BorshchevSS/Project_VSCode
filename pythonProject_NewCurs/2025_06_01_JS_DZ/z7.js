let summaPocupci = parseFloat(prompt("введи сумму покупки: "));
let cenaSoScidkoi;

if ((summaPocupci > 0) && (summaPocupci <= 200)) {
    cenaSoScidkoi = summaPocupci;
} else if ((summaPocupci > 200) && (summaPocupci <= 300)) {
    cenaSoScidkoi = summaPocupci*0.97;
} else if ((summaPocupci > 300) && (summaPocupci <= 500)) { 
    cenaSoScidkoi = summaPocupci*0.95;
} else if (summaPocupci > 500) { 
    cenaSoScidkoi = summaPocupci*0.93;
} else {
  alert('Ошибка в исходных данных, введите повторно!');
}
  alert( 'Цена товара с учетом скидки составит: ' + cenaSoScidkoi);