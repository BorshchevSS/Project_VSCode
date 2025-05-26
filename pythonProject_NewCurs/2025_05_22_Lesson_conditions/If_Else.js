const condition = false; //true false
const condition2 = false
let message;
let punctuationMark;
    if (condition) {
        message = "Hi";
        punctuationMark = "!"
    } else {
        message = "Bye";
        punctuationMark = "!!!"
    }
        
alert (message + punctuationMark);

    if (condition) {
        message = "Hi";
        punctuationMark = "!"
    } else if(condition2){
        message = "Bye";
        punctuationMark = "!!!"
    } else {
        message = "Bye";
        punctuationMark = "!!!!!!"
    }