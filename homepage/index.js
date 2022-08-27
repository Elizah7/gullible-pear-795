import {navbar,footer} from "./script.js"
let navbar23=document.getElementById("navbar")
navbar23.innerHTML=navbar()
let footera=document.getElementById("footera")
footera.innerHTML=footer()
let linkfunction=()=>{
    window.location.href="../asos/women.html"
}

let btn=document.getElementById("linpage")
btn.addEventListener("click",()=>{
    linkfunction()
})