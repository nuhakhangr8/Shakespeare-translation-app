var btnTranslate=document.querySelector("#btn-translate")
var inputTxt=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")

//var serverurl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverurl="	https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationUrl(text){
   return serverurl+"?"+"text="+text; 
}

function clickHandler() {

    var inputText=inputTxt.value //input
   
    fetch(getTranslationUrl(inputText))//sent for processing
    .then(response=>response.json())
    .then(json=>{      
        var translatedText=json.contents.translated
        outputDiv.innerText=translatedText; //updated the output
    })
        console.log("clicked!");

}

btnTranslate.addEventListener("click",clickHandler)