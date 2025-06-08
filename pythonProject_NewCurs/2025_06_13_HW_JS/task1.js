
//     const numbers = [1, 4, 44, 55, 66, 99]

//     //print(generateArray(10));
// massive = generateArray(10);
// chetElementMassive (massive);

//Генерирует массив (для заданий ниже)
    function generateArray (size){
            const array = [];
            for (let i = 0; i < size; i++) {
                //array[i] = Math.floor(Math.random()*100); //Math.floor ближайшее целое в МЕНЬШУЮ сторону
                array[i] = Math.ceil(Math.random()*100); //Math.ceil ближайшее целое в БОЛЬШУЮ сторону
            }
            printArray(array, "task1_1");
        return array
    }

//2. Функция принимает массив и выводит только четные элементы.
    function chetElementArray (array){
        let chetArray = [];
        let i_chetArray = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0){
                chetArray[i_chetArray] = array[i];
                //alert(array[i] + "__" + chetArray[i_chetArray] + "__" + i_chetArray);
                i_chetArray = i_chetArray + 1;
            }
        }
        printArray(chetArray, "task1_2");
        return chetArray
    }
 
//3. Функция принимает массив и возвращает сумму всех элементов массива.
    function sumElementArray (array){
        let sumElement = 0;
            for (let i = 0; i < array.length; i++) {
                sumElement = sumElement + array[i];
            }
        printNumOrText(sumElement, "task1_3");
        return sumElement
    }

//4. Функция принимает массив и возвращает его максимальный элемент.
    function maxElementArray (array){
        let maxElement = 0;
            for (let i = 0; i < array.length; i++) {
                (array[i] > maxElement) ? (maxElement = array[i]) : (maxElement = maxElement);
            }
        printNumOrText(maxElement, "task1_4");
        return maxElement
    }

//5. Функция добавления нового элемента в массив по указанному индексу.
    function changeElementArray (array){
        //Дополнительно требуется добавить функцию проверки введённого значения
        let indexElement = parseInt(prompt(`Сгенерирован массив ${array}
            Введи индекс элемента в массиве для замены (от 0 до ${array.length - 1}): `));
        let newElement = prompt(`Элемент ${array[indexElement]} с индексом ${indexElement} заменим на: `);
        let newArray = array;
        newArray[indexElement] = newElement;
        printNumOrText(newArray, "task1_5");
        return newArray
    }

//6. Функция удаления элемента из массива по указанному индексу.
    function dellElementArray (array){
        //Дополнительно требуется добавить функцию проверки введённого значения
        let indexElement = parseInt(prompt(`Сгенерирован массив ${array}
            Введи индекс элемента в массиве (от 0 до ${array.length - 1}) для удаления: `));
        let verification = confirm(`Элемент ${array[indexElement]} с индексом ${indexElement} удаляем?`);
    //https://ru.hexlet.io/qna/javascript/questions/kak-udalit-opredelennyy-element-iz-massiva-js

    //Способ №1. воспользоваться функцией высшего порядка filter (необходимо удалить элемент, который равен ???)
        //let newArray = array.filter((number) => number !== array[indexElement]);

    //Способ №2. с помощью ключевого слова delete (указываем элемент который нужно удалить)
        //let newArray = array;
        //delete newArray[indexElement]; //Обратите внимание, что на месте нулевого элемента осталось пустое место. Как правило, удалять элемент массива таким способом не является хорошей практикой. Данный способ приведен в качестве примера.

    //Способ №3. Одним из наиболее удобных методов для удаления элемента массива является метод splice():
        let newArray = array;
        newArray.splice(indexElement, 1) // начиная со ??? элемента удаляем один элемент

        printArray(newArray, "task1_6");
        return newArray
    }



//Публикуем результат в виде строки в соответствующий ID
    function printArray(array, taskN){ //Передаем массив и ID в виде текста
        document.getElementById(taskN).innerText = array.toString();
}

//Публикуем результат в виде строки в соответствующий ID
    function printNumOrText(numOrText, taskN){ //Передаем ЧИСЛОилиСТРОКУ и ID в виде текста
        document.getElementById(taskN).innerText = numOrText;
}