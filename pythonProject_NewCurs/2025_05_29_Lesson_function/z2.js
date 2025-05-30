let chislo = parseInt(prompt("Введите число: "));
let stepen = parseInt(prompt("Введите степень: "));

alert(cisloVstepen(chislo, stepen));

function cisloVstepen(a, b) {
    return (a ** b);
}