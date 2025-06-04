window.onload = function(){
    const numbers = [1, 4, 44, 55, 66, 99]

    //print(generateArray(10));
massive = generateArray(10);
chetElementMassive (massive);

    function generateArray (size){
            const array = [];
            for (let i = 0; i < size; i++) {
                //array[i] = Math.floor(Math.random()*100); //Math.floor ближайшее целое в МЕНЬШУЮ сторону
                array[i] = Math.ceil(Math.random()*100); //Math.ceil ближайшее целое в БОЛЬШУЮ сторону
            }
            print(array, "task1");
        return array
    }

    function chetElementMassive (array){
        let chetArray = [];
        let i_chetArray = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0){
                chetArray[i_chetArray] = array[i];
                //alert(array[i] + "__" + chetArray[i_chetArray] + "__" + i_chetArray);
                i_chetArray = i_chetArray + 1;
            }
        }
        print(chetArray, "task2");
        return
    }

//Публикуем результат в виде строки в соответствующий ID
    function print(array, taskN){ //Передаем массив и ID в виде текста
    document.getElementById(taskN).innerText = array.toString();
}
}