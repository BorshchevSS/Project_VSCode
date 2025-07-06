window.onload = function (){
    document.querySelector("form").addEventListener("submit", signIn)
}

function signIn(event){
    //sessionStorage; // Хранилище сессии. Пока открыт браузер данные храняться (при закрытии чиститься), данные храняться парами ключь:значение
    //localStorage; //Данные храняться вне зависимости от сесии, ограничено размером до 5 МВт

    //sessionStorage.setItem("login", "myLogin"); //сохранение
    //sessionStorage.getItem("login"); //чтение

    sessionStorage.setItem("login", "myLogin");
    sessionStorage.setItem("checked", "true");
    event.preventDefault();
    window.location.assign("remember.html");
    alert(document.querySelector("#login").value);
    alert(document.querySelectorAll("#login")[0].value);
    alert(document.querySelector("#remember").checked);
}