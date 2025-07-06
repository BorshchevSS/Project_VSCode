let a = new HtmlElement(
    "a", 
    true, 
    "More...", 
    [new Attributes("href", "https://www.lipsum.com"), new Attributes("target", "_blank")], 
    [], 
    []
);
    
let p = new HtmlElement(
    "p", 
    true, 
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    [],
    [new Styles("text-align", "justify")],
    [a]
);

let h3 = new HtmlElement(
    "h3",
    true,
    "What is Lorem Ipsum?",
    [], 
    [], 
    [], 
);

let img = new HtmlElement(
    "img",
    false,
    "",
    [new Attributes("src", "lipsum.jpg"), new Attributes("alt", "Lorem Ipsum")], 
    [new Styles("width", "100%")], 
    [], 
);

let element2 = new HtmlElement(
    "div",
    true, 
    "", 
    [], 
    [new Styles("width", "300px"),new Styles("margin", "10px")], 
    [h3, img, p]);

let element = new HtmlElement(
    "div",
    true, 
    "", 
    [new Attributes("id", "wrapper")], //Добавляем атрибут
    [new Styles("display", "flex")],    //Добавляем стиль
    [element2, element2]);

    //element.addStyles(new Styles("color", "brown")); //Добавляем стиль (цвет текста красный) в объект "element."
    //element.addStyles(new Styles("background-color", "green")); //Добавляем стиль фона (цвет фона зелёный) в объект "element."
    //element.innerText = "ТЕСТ"; //Добавляем текст в объект "element."


    //  let element = new HtmlElement("div",true, "", [], [], [element2]);
    //  element.addAttributes(new Attributes("id", "wrapper")); //Добавляем атрибут
    //  element.addStyles(new Styles("display", "flex")); //Добавляем стиль
    // // element.addStyles(new Styles("color", "brown")); //Добавляем стиль (цвет текста красный)
    // // element.addStyles(new Styles("background-color", "green")); //Добавляем стиль фона (цвет фона зелёный)
    // // element.innerText = "ТЕСТ";



    console.log(element);


    document.write(element.getHtml());

    //document.write(html);