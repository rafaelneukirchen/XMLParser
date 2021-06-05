let changer = document.querySelector("p#changer");
let input = document.querySelector(".wrapper-textarea");
if(input){
    input.addEventListener("change", (e) => {
        let text = e.target.value;
        let domParser = new DOMParser();
        let dom = domParser.parseFromString(text, "text/xml");
        if (dom.documentElement.nodeName == "parsererror") {
            changer.innerHTML = `XML Inválido! Erro: ${dom.documentElement.childNodes[0].nodeValue}`;
            changer.style.color = "red";
        } else {
            changer.innerHTML = "XML Válido!";
            changer.style.color = "green";
        }
    });
}