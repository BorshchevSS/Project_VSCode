
//https://www.w3schools.com/js/js_json_parse.asp
const movie = '{"title":"Форсаж", "year":2010, "inProduction":false, "characters":["Доменик", "Мия", "Осел"], "charactersP":[{"name":"Торрето", "actor":"Вин Дизель"}, {"name":"Мия", "actor":"Инкогнито"}] }'; //Строка в формате JSON
const movieObject = JSON.parse(movie); //Превращает строка в формате JSON превращается в объект JS
console.log(movieObject);
console.log(movieObject.characters[0]); //Достаем из объекта movieObject 

//https://www.w3schools.com/js/js_json_stringify.asp
const movie2 = {title:"Шрек", year:2004, "inProduction":false, characters: ["Шрек", "Фиона", "Осел"], charactersP: [{name:"Торрето", actor:"Вин Дизель"}, {name:"Мия", actor:"Инкогнито"}]}; //Создаем объект JS
const movie2JsString = JSON.stringify(movie2); // Объект JS превращаем в строку в формате JSON
console.log(movie2JsString);
