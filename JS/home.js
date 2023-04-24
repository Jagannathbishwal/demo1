var cardiv=document.querySelector("#carAni");
var text=document.querySelector("#heading2")
function carMove()
{
    cardiv.style.transform="translateX(420px)";
    cardiv.style.transition="transform 5s";
    text.style.transform="translateY(0px)";
    text.style.filter="opacity(1)";
    text.style.transition="transform 5s,filter 5s";
}