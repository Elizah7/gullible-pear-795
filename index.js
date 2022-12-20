import {navbar,footer} from "./script.js"
let navbar23=document.getElementById("navbar")
navbar23.innerHTML=navbar()
let footera=document.getElementById("footera")
footera.innerHTML=footer()
let linkfunction=()=>{
    window.location.href="./womenProducts.html";
}

let btn=document.getElementById("whitegap")
btn.addEventListener("click",()=>{
    linkfunction()
})
let btn1=document.getElementById("linkpage")
btn1.addEventListener("click",()=>{
    linkfunction()
})
let btn2=document.getElementById("linkpage1")
btn2.addEventListener("click",()=>{
    linkfunction()
})
let btn3=document.getElementById("linkpage2")
btn3.addEventListener("click",()=>{
    linkfunction()
})
let btn4=document.getElementById("linkpage3")
btn4.addEventListener("click",()=>{
    linkfunction()
})
let btn5=document.getElementById("linkpage4")
btn5.addEventListener("click",()=>{
    linkfunction()
})
let btn6=document.getElementById("linkpage5")
btn6.addEventListener("click",()=>{
    linkfunction()
})

let loginfunction=()=>{
    window.location.href="./signin.html"
}
let loginlogo=document.getElementById("loginlogo")
loginlogo.addEventListener("click",()=>{
    loginfunction()
})

