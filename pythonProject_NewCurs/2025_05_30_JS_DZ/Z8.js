let sumDeneg = prompt("Введи сумму денег в кошельке: ");
let cenaEdinicTovara = prompt("Введи цену одной единицы товара: ");
let kolishestvoShkoladok = ~~(sumDeneg / cenaEdinicTovara);
let sdacha = sumDeneg % cenaEdinicTovara;
alert ("На " + sumDeneg + " руб. получится купить " + kolishestvoShkoladok + " единицы товара, сдача " + sdacha +" руб.")
