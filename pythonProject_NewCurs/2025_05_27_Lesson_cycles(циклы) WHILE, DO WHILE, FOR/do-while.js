let counter=0;
let x;


do { //Сделай  {все что в теле} пока (Условие истино). В отличие от обычного while цикл Do While отработает минимум один раз
    
    //counter = counter + 1;
    //counter += 1;
    //counter ++; //инкремент постфиксный ()
    //++counter; //инкремент префиксный

    //x = counter++; //Сначала присвой x = counter а уже потом увеличь counter на 1
    x = ++counter; //Сначала увеличь counter на 1 а уже потом присвой x = counter
    console.log("x=" + x);
    console.log("counter=" + counter);
    console.log(counter);
       alert(counter);
} while (counter < 5)