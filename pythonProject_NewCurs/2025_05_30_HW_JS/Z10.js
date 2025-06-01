let celoeChislo = parseInt(prompt("Введите целое число:"));
const isEven = (celoeChislo % 2 === 0);
const result = isEven ? "Четное" : "Нечетное"; //Тернарный оператор (замена IF ELSE)
alert ("Число " + celoeChislo + " - " + result)