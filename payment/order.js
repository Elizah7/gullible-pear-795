import {navbar} from "../homepage/script.js"
import {display} from "./export.js"
let nav  = document.getElementById("nav")
nav.innerHTML = navbar()





let vdata = JSON.parse(localStorage.getItem("data"))||[]
display(vdata)
