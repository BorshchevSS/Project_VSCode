window.onload = function (){
    document.querySelector("form").addEventListener("submit", signIn)
}

function signIn(event){
    //sessionStorage; // Хранилище сессии. Пока открыт браузер данные храняться (при закрытии чиститься), данные храняться парами ключь:значение
    //localStorage; //Данные храняться вне зависимости от сесии, ограничено размером до 5 МВт

    //sessionStorage.setItem("login", "myLogin"); //сохранение
    //sessionStorage.getItem("login"); //чтение

    // sessionStorage.setItem("login", "myLogin");
    // alert(document.querySelector("#login").value);
    // alert(document.querySelectorAll("#login")[0].value);
    sessionStorage.setItem("login", document.querySelector("#login").value);
    
    // alert(document.querySelector("#remember").checked);
    // sessionStorage.setItem("checked", "true");
    sessionStorage.setItem("checked", document.querySelector("#remember").checked);
    event.preventDefault();
    window.location.assign("Z1_remember.html");


}