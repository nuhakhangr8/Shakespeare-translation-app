var btnTranslate=document.querySelector("#btn-translate")
var inputTxt=document.querySelector("#txt-input")


function clickHandler() {

    var outputtext=inputTxt.value;
        console.log(outputtext);
        console.log("clicked!");
}

btnTranslate.addEventListener("click",clickHandler)