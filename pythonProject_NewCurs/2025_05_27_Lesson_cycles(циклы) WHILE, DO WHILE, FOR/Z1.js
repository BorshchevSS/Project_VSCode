let start = parseInt(prompt("Введите число начала диапазона"));
let end = parseInt(prompt("Введите чило конца диапазона"));
let sum = 0;

if (start > end) {
    let temp = start;
    start = end;
    end = temp;
}


for (let i=start; i <= end; i++ ) {
    sum = sum + i; //sum +=i
    console.log("i="+i+"_"+"sum="+sum)
}
alert(sum)