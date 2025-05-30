let chislo_1=parseInt(prompt("Введите число №1"));
let chislo_2=parseInt(prompt("Введите число №2"));

alert(min(chislo_1, chislo_2));



function min(a, b) {
    //return Math.min(a, b);
   return ((a<b)? a:b); //пример использования тернарного оператора(упрощенный IF)
}

