let chslo_ABC = prompt("Введи трехзначное число, к примеру `123`: ");
let A = (chslo_ABC%10);
let B = ((chslo_ABC%100)-A)/10;
let C = ((chslo_ABC%1000)-B*10-A)/100;

alert (A+""+B+""+C);