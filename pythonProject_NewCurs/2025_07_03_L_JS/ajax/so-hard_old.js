//добавить обработку события (при нажатии на кнопку)
window.onload = () => {
    document.querySelector("form").addEventListener("submit", search);

    function search(event){ //https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_xmlhttp
        const req = new XMLHttpRequest();
        req.onload = function(){ 
            const searchResult = this.responseText; // this это в данном случае мы обращаемя к "req"
            console.log(searchResult);
            fillFilmsBlock((searchResult)); //Заполнить блок с фильмами
        }
        let url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=1&page=1`; //https://kinopoiskapiunofficial.tech/documentation/api/#/films/get_api_v2_1_films_search_by_keyword
        req.setRequestHeader("X-API-KEY", "299a8bfe-d514-4ece-99b7-70659510d80a");
        req.open("GET", url);
        req.send(); //отправляем запрос
        event.preventDefault(); //не обновляем стр
    }
    function fillFilmsBlock(searchResult){
        const films = JSON.parse(searchResult);
        console.log(films);
    }

    //'X-API-KEY': '299a8bfe-d514-4ece-99b7-70659510d80a'
}