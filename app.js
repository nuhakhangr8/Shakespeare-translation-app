var btnTranslate=document.querySelector("#btn-translate")
var inputTxt=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")

var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function clickHandler() {

    fetch(url)
    .then(response=>response.json())
    .then(json=>console.log(json))
     //outputDiv.innerText="thouest thhees thuus "+inputTxt.value;
       // console.log(outputDiv.innerText);
        console.log("clicked!");
}

btnTranslate.addEventListener("click",clickHandler)