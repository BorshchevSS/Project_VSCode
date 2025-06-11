// str1 = prompt("Введи строку №1: ");
// str2 = prompt("Введи строку №2: ");

//1
//alert(compareTwoStringsByCharacters (str1 = prompt("Введи строку №1: "), str2 = prompt("Введи строку №2: ")));

//1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.
function compareTwoStringsByCharacters (str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
}

//2
//alert(firstCharacterUppercase ("qweые!..,"))

//2. Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
function firstCharacterUppercase (str) {
    //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    //https://ru.texthandler.com/info/case-converter-with-javascript/
    //str.charAt(0).toUpperCase(); //str.charAt(0) - добываем первый символ строки; .toUpperCase() - меняем регистр на верхний
    let newStr =  str.charAt(0).toUpperCase() + str.slice(1, (str.length));
    return newStr
}

//3
//sumVowelsLetters ("апроо")

//3. Написать функцию, которая считает количество гласных букв в переданной строке.
function sumVowelsLetters (str) {
    let vowels = 0;
    //let consonants = 0;
    const standardVowels = "aeiouyауоыиэяюёе";
    let marker = 0; // 0 - символ не является гласным или согласным; 1 - гласная буква; 2 - согласная буква

    for (let i = 0; i < str.length; i++) {
        //alert(str[i]);
        marker = 0;
        for (let j = 0; j < standardVowels.length; j++) {
            //alert(standardVowels[j]);
            if (str[i] == standardVowels[j]) {
                marker = 1;
                break
            } 
        }
        if (marker == 1) {
            vowels = vowels + 1;
        }
    }
return vowels
}

//4. Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. 
// Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. 
// Функция должна быть нечувствительна к регистру.
function searchSpam (str){
    //создаем массив spamWords с запрещенными фразами(которые считаются спамом).
    const spamWords = [
    '100% бесплатно',
    'увеличение продаж',
    'только сегодня',
    'не удаляйте',
    'ххх'
    ];
    const lowerStr = str.toLowerCase(); //Приводит входную строку str к нижнему регистру (toLowerCase()), чтобы проверка была нечувствительна к регистру.

}

function hasSpam(str) {
    const spamWords = [
        '100% бесплатно',
        'увеличение продаж',
        'только сегодня',
        'не удаляйте',
        'ххх'
    ];
    
    const lowerStr = str.toLowerCase();
    
//Использует метод some(), чтобы проверить, содержит ли строка хотя бы одно из запрещенных слов (также приведенных к нижнему регистру).
//Возвращает true, если спам обнаружен, и false в противном случае.
    return spamWords.some(spamWord => 
        lowerStr.includes(spamWord.toLowerCase())
    );
}

// Пример использования:
console.log(hasSpam("Предложение 100% бесплатно только для вас!")); // true
console.log(hasSpam("Обычное сообщение без спама")); // false
console.log(hasSpam("ХХХ - это спам!")); // true (регистр не учитывается)

//5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. 
// Если длина строки больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие. Например: должна вернуть truncate("Hello, world", 8) должна вернуть "Hello...".
function limitLengthStr (str, quantitySymbol){
    let newStr;
    (str.length > quantitySymbol) ? (newStr = `${str.slice(0, quantitySymbol)}...`) : (newStr = str);
    return newStr;
}

console.log(limitLengthStr("ХХХ - это спам!", 9));//

//6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.
//Палиндром — текст, одинаково читающийся как справа налево, так и слева направо. 
function checkPolindrom (str){
    let marker = 1; //Нужен для работы цикла. Полиндром - 1, иначе 0
    for (let i = 0; i < Math.trunc((str.length)/2); i++) {
        if (str[i] != str[str.length-1-i]){
            marker = 0;
            break;
        }
    }
    return (marker == 1) ? (true) : (false)
}

//alert(checkPolindrom("1233322"))

//7. Написать функцию, которая считает количество слов в предложении.
function schetColichetvSlov (str){
    var words = str.split(" ");
    var collect = {};
    for (var i = 0; i < words.length; i++) {
    // если в словаре еще нет свойства words[i] заводим такое свойство с значением 0
    if (!collect[words[i]])
        collect[words[i]] = 0;
    // увеличиваем счетчик
    collect[words[i]]++;
    }

    // вывод результатов
    for(var word in collect)
    console.log(word, collect[word]);
}

//schetColichetvSlov ("один три два три три три")

//8. Написать функцию, которая возвращает самое длинное слово из предложения.
function findLongestWord(sentence) {
  // Разбиваем предложение на слова, учитывая только буквы и цифры
    //1. Разбивает предложение на слова с помощью split(/\s+/) (разделитель - пробелы)
    //2. Очищает каждое слово от знаков пунктуации с помощью replace(/[^a-zA-Zа-яА-Я0-9]/g, '')
  const words = sentence.split(/\s+/).map(word => word.replace(/[^a-zA-Zа-яА-Я0-9]/g, ''));
  if (words.length === 0) return ''; // Если нет слов, возвращаем пустую строку
  let longestWord = words[0];
  //Проходит по всем словам и находит самое длинное
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
}

// Пример использования:
//console.log(findLongestWord("Это предложение содержит несколько слов разной длины")); // "содержит"
//console.log(findLongestWord("JavaScript - интересный язык программирования")); // "программирования"

//9. Написать функцию, которая считает среднюю длину слова в предложении.
function averageWordLength(sentence) {
  // Разбиваем предложение на слова, удаляя знаки пунктуации 
  // 1. Разделение на слова: - split(/\s+/) разбивает строку по пробелам (включая множественные пробелы).
  const words = sentence.split(/\s+/)
    .map(word => word.replace(/[^a-zA-Zа-яА-Я0-9]/g, '')) //2. Очистка от пунктуации:    - replace(/[^a-zA-Zа-яА-Я0-9]/g, '') удаляет все символы, кроме букв (английских и русских) и цифр.
    .filter(word => word.length > 0); // Игнорируем пустые строки 3. Фильтрация пустых строк:   - filter(word => word.length > 0) убирает пустые строки, которые могли появиться после удаления пунктуации.
  //4. Проверка на пустое предложение:   - Если слов нет (words.length === 0), возвращается 0.
  if (words.length === 0) return 0; // Если слов нет, возвращаем 0
  
  const totalLength = words.reduce((sum, word) => sum + word.length, 0);//- reduce суммирует длины всех слов.
  const average = totalLength / words.length;
  
  return average;
}

// Примеры использования:
//console.log(averageWordLength("Привет, мир!")); // 4.5
//console.log(averageWordLength("JavaScript - мощный язык программирования")); // ~7.14
//console.log(averageWordLength("")); // 0
//console.log(averageWordLength("Тест")); // 4

//10. Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке. Также вывести, сколько всего раз встречается этот символ в строке.
function findCharIndexes(str, char) { //Входные параметры:   - str — строка, в которой ищем символ.   - char — искомый символ (учитывается точное совпадение, включая регистр).
  const indexes = [];
  let count = 0;
    //Поиск символа:   - Функция проходит по каждому символу строки в цикле for.   - Если символ совпадает с char, его индекс (i) добавляется в массив indexes, а счетчик count увеличивается.
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      indexes.push(i);
      count++;
    }
  }
//Результат:   - Возвращается объект с двумя свойствами:     - indexes — массив индексов, где встречается символ.     - count — общее количество вхождений символа.
  return {
    indexes: indexes,
    count: count
  };
}

// Пример использования:
const result = findCharIndexes("Hello, world!", "l");
console.log("Индексы:", result.indexes); // [2, 3, 10]
console.log("Количество:", result.count); // 3