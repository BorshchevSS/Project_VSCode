// Создаем массив фруктов
const fruits = ['Яблоко', 'Апельсин', 'Банан', 'Киви', 'Манго', 'Груша', 'Абрикос'];

// Сортируем массив по алфавиту
fruits.sort();

// Функция для вывода массива в виде HTML-списка
function displayFruitsAsList(fruitsArray) {
  document.write('<ul>');
  fruitsArray.forEach(fruit => {
    document.write(`<li>${fruit}</li>`);
  });
  document.write('</ul>');
  return
}

//2. Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть нерегистрозависимым.
function findFruitIndex(fruitsArray = fruits) {
    let fruitName = prompt(`Введи название фрукта для поиска из списка ${fruits} :`);
    if (!fruitName || typeof fruitName !== 'string') return -1;
    const lowerCaseFruit = fruitName.toLowerCase();
    for (let i = 0; i < fruitsArray.length; i++) {
        if (fruitsArray[i].toLowerCase() === lowerCaseFruit) {
        return i;
        }
    }
    return -1;
}