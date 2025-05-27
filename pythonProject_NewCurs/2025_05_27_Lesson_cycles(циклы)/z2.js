let number1 = parseInt(prompt("Введите число №1"));
//let number2 = parseInt(prompt("Введите число №2"));
let nod;





// for (let i=1; i <= number1,number2; i++ ) { //Math.min(number1,number2)
//     sum = sum + i; //sum +=i
//     console.log("i="+i+"_"+"sum="+sum)
// }
// alert(sum)

nod = 1
do { //Сделай  {все что в теле} пока (Условие истино). В отличие от обычного while цикл Do While отработает минимум один раз
    nod=nod+1;
    alert("number1="+number1+"_"+"nod="+nod+"__"+( number1 % nod))
} while ( (number1 % nod) != 0)
    alert(nod)