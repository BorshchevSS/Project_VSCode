let word_1 = "text";
let word_2 = " ";
let sentence = word_1 + word_2 + word_1 + word_2 + 987 + 123; //Конкатенация
let sentence_2 = 987 + 123 + word_2 + word_1 + word_2; //Конкатенация
let sentence_3 = word_1 + word_2 + word_1 + word_2 + (987 + 123); //Приоритет операции в скобках
document.write(sentence);
document.write("<br>"); 
document.write(sentence_2);
document.write("<br>"); 
document.write(sentence_3);
document.write("<br>"); 

let paragraphs = "<p>Sentece1. <br>Sentece2</p>"
document.write(paragraphs);

const lines = `Stroka 1
Stroka 1`;
document.write(lines);
console.log(lines);
alert(lines);