const array1 = [11, 22, 33, 44, 55, 66, 22, 44];
const array2 = [22, 44, 66, 88];

function printSourceArrays (){
    document.getElementById("array1").innerText = array1.toString();
    document.getElementById("array2").innerText = array2.toString();
}

//1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
function uniqueValuesArray (array1, array2) {
    //array1.concat(array2) - объединение массивов
    //[...new Set(array)] - уделение дубликатов
    let uniqueValues = [...new Set(array1.concat(array2))]; 
    printArray(uniqueValues, "task2_1");
return uniqueValues
}   

//2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.
function identicalValuesArray (array1, array2) {
    const uniqueArray1 = [...new Set(array1)];
    const uniqueArray2 = [...new Set(array2)];
    const uniqueArray1AndArray2 = uniqueArray1.concat(uniqueArray2);
    //alert(uniqueArray1AndArray2)

    const uniqSet = new Set();
    for (let i = 0; i < uniqueArray1AndArray2.length; i++) {
        for (let j = 0; j < i; j++){
        if (uniqueArray1AndArray2[j] === uniqueArray1AndArray2[i]) {uniqSet.add(uniqueArray1AndArray2[i])};
        }
    }
    const uniq = Array.from(uniqSet)
    printArray(uniq, "task2_2");
return uniq
}

//3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.
function getUniqueElements (array1, array2) {
    const uniq = array1.filter(item => !array2.includes(item)); //Эта функция использует метод filter() для первого массива, который создает новый массив, содержащий только те элементы, для которых условие возвращает true. В данном случае условие проверяет, что элемент не содержится во втором массиве (с помощью метода includes()).
    printArray(uniq, "task2_3");
return uniq
}