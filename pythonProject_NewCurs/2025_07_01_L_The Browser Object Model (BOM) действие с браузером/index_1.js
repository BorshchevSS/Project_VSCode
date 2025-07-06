let myWindow;

function myFunction() {
  myWindow = window.open("", "", "width=200,height=100");
  myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}

function closeWindow() {
  myWindow.close();
}

function moveWindow(){
    myWindow.moveTo(100, 50);
}

function showURL() {
  console.log(window.location.href); //https://www.w3schools.com/js/js_window_location.asp
  console.log(window.location.hostname); //
  console.log(window.location.pathname); //
  console.log(window.location.protocol); //
}

function loadNewHtml(){
  window.location.assign("New.html") //Открыл новый документ 
}

function back(){
  history.back();
}

function forward(){
  history.forward();
}


window.onload = function(){
  document.querySelector("form").addEventListener("submit", submitHandler);
}

function submitHandler(event){
  event.preventDefault();
  console.log("event");
    console.log(document.querySelectorAll("#userName"))
      console.log(document.querySelectorAll("#userName").value)
}