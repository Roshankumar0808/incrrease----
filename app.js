const text = document.querySelector("#text");
const large = document.querySelector("#inc");
const small = document.querySelector("#dec");

let number = 16;
large.addEventListener("click",add)
function add(){
    number +=2;
    text.style.fontSize= `${number}px`
}

small.addEventListener("click",sub)
 function sub(){
    number-=2;
    text.style.fontSize= ` ${number}px`

}