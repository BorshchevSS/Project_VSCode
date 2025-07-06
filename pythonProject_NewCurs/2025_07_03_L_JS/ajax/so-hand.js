window.onload = () => {
    document.querySelector("form").addEventListener("submit", search);

    function search(event){ //https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_xmlhttp

    const keyword = document.querySelector("#title").value; //получаю значение из input
    const pageNamber = 1;

    fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${pageNamber}`, {
    method: 'GET',
    headers: {
        'X-API-KEY': '299a8bfe-d514-4ece-99b7-70659510d80a',
        'Content-Type': 'application/json',
    },})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
        event.preventDefault(); //не обновляем стр
    }
    function fillFilmsBlock(searchResult){
        const films = JSON.parse(searchResult);
        console.log(films);
    }

    //'X-API-KEY': '299a8bfe-d514-4ece-99b7-70659510d80a'
}