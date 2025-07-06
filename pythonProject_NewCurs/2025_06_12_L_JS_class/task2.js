// Задание 2
// Реализовать класс, описывающий html элемент.Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().
// Обратите внимание. Чтобы получить весь этот html в виде строки должно быть достаточно вызвать метод getHtml только у тега с идентификатором wrapper.

//https://ru.stackoverflow.com/questions/1171705/%D0%9A%D0%B0%D0%BA-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-html-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%B8-%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BD%D0%B0-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%83

//Класс с помощю которого мы будем добавлять объекты в массив "attributes"
class Attributes {
    constructor (name, value){
        this.name = name;
        this.value = value;
    }
}

class Styles {
    constructor (name, value){
        this.name = name;
        this.value = value;
    }
}

class HtmlElement {
    constructor (tegName, isSelfClosed, innerText, attributes, styles, innerElements){
        this.tegName = tegName;             //название тега;
        this.isSelfClosed = isSelfClosed;   //самозакрывающийся тег или нет;
        this.innerText = innerText;         //текстовое содержимое;
        this.attributes = attributes;       //массив атрибутов (ID:);
        this.styles = styles;               //массив стилей;
        this.innerElements = innerElements; //массив вложенных таких же тегов;
    }
    addAttributes(attributes){
       this.attributes.push(attributes);
    }
    addStyles(styles){
       this.styles.push(styles);
    }
    pushInnerElement(innerElement){ //Добавление вложенного элемена в конец массива
        this.innerElements.push(innerElement);
    }
    unshiftInnerElement(innerElement){ //Добавление вложенного элемена в начало
        this.innerElements.unshift(innerElement);
    }

    getHtml(){
        let result = ""; //Создаем пустую строку
        result += `<${this.tegName} `; //добавляем тег

        //Добавление атрибутов внутри тега (ID=...)
        for (let i = 0; i < this.attributes.length; i++) {
            result += `${this.attributes[i].name}="${this.attributes[i].value}" `;
        }

        //Добавление стилий внутри тега (style=...)
        if (this.styles.length > 0){ //Проверка, если стили заданы
            result += `style="`      //Сдалано что бы слово не дублировалось в цикле
            for (let i = 0; i < this.styles.length; i++) {
                result += `${this.styles[i].name}: ${this.styles[i].value}; `;
            }
            result += `"`           //Сдалано что бы слово не дублировалось в цикле
        }

        result += `>`;  //Закрываем первый тег

        if (this.innerText.length > 0){
            result += this.innerText;
        }

        // Добавление вложенного элемента (он такой же живой, поэтому над ним выполняем действие ".getHtml()")
        for (let i = 0; i < this.innerElements.length; i++) {
            result += this.innerElements[i].getHtml();
        }

        if (this.isSelfClosed) { //Если тег закрытый, то приклей закрывающийся тег
            result += `</${this.tegName}>`;
        }
        //alert(result)
        return result;
    }
}

//Реализовать класс, который описывает css класс.
class CssClass { 
    constructor (nameCssClass, styles){
        this.nameCssClass = nameCssClass; //название css класса;
        this.styles = styles;             //массив стилей;
    }
    AddStyles(){//метод для установки/добавления стиля;

    }
    DellStyles(){//метод для удаления стиля;

    }
    getCss() {//метод getCss(), который возвращает css код в виде строки

    }
}

