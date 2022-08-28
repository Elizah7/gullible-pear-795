import {navbar,footer} from "./script.js"
let navbar23=document.getElementById("navbar")
navbar23.innerHTML=navbar()
let footera=document.getElementById("footera")
footera.innerHTML=footer()

let linkfunction=()=>{
    window.location.href="../asos/men.html"
}

let btn=document.getElementById("shopasosdesign")
btn.addEventListener("click",()=>{
    linkfunction()
})
let btn1=document.getElementById("card1")
btn1.addEventListener("click",()=>{
    linkfunction()
})
let btn2=document.getElementById("card2")
btn2.addEventListener("click",()=>{
    linkfunction()
})
let btn3=document.getElementById("card3")
btn3.addEventListener("click",()=>{
    linkfunction()
})
let btn4=document.getElementById("card4")
btn4.addEventListener("click",()=>{
    linkfunction()
})
let btn5=document.getElementById("card5")
btn5.addEventListener("click",()=>{
    linkfunction()
})
let btn6=document.getElementById("car6")
btn6.addEventListener("click",()=>{
    linkfunction()
})

let loginfunction=()=>{
    window.location.href="../signin/signin.html"
}
let loginlogo=document.getElementById("loginlogo")
loginlogo.addEventListener("click",()=>{
    loginfunction()
})