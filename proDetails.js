

import {navbar,footer} from "./script.js"
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("footer1").innerHTML = footer();



let buy = JSON.parse(localStorage.getItem("details"))
console.log(buy);

let bag = JSON.parse(localStorage.getItem("data")) || [];

buy.map(function(data){

    document.querySelector(".image").innerHTML = null;
    document.querySelector(".info").innerHTML = null;

    let img = document.createElement("img");
    img.setAttribute("class", "img1")
    img.src = data.image;

    let title = document.createElement("p");
    title.innerText = data.name;
    title.setAttribute("class", "name");
    
    

    let price = document.createElement("p");
    price.innerText = `£ ${data.price}`;
    price.style.color = "#d01345"

    

    let color = document.createElement("p");
    color.innerText = `${data.color}`;
    color.setAttribute("class", "colour")

    let label = document.createElement("label");
    label.innerText = "COLOUR:";

    let div3 = document.createElement("div");
    div3.setAttribute("id", "div3");
    
    div3.append(label, color);


    let div = document.createElement("div");
    div.setAttribute("class", "div1");

    let label1 = document.createElement("label");
    label1.innerText = "SIZE:"
    

    let select = document.createElement("select");
    select.setAttribute("class", "size");
    let option = document.createElement("option");
    option.innerText = "Please select";
    let option1 = document.createElement("option");
    option1.innerText = "UK6";
    let option2 = document.createElement("option");
    option2.innerText = "UK8";
    let option3 = document.createElement("option");
    option3.innerText = "UK10";
    select.append(option, option1, option2, option3); 

    let div2 = document.createElement("div");
    div2.append(select);
    


    let button1 = document.createElement("button");
    button1.innerText = "PROCESS TO CHECKOUT";
    button1.setAttribute("class", "btn1");
    button1.style.backgroundColor = "#018849"
    

    button1.addEventListener("click", function(){
        addToBag(data);
    })

    div.append( price)
    document.querySelector(".image").append(img);
    document.querySelector(".info").append(title, div, div3, label1, div2, button1 )
})
let userdetail = JSON.parse(localStorage.getItem("key2"))

  let loginData = JSON.parse(localStorage.getItem("key2"))
function addToBag(data){
if(userdetail){
    bag.push(data);
    //console.log(bag);
     
    localStorage.setItem("data", JSON.stringify(bag));
    window.location.href = "./payment.html";
}
else{
    alert("Please Login first")
}
  
    if(loginData)
    {
        bag.push(data);
   
     
    localStorage.setItem("data", JSON.stringify(bag));
    window.location.href = "./payment.html";
    }
    else{
        alert("Please Login First!")
        window.location.href = "./signin.html";
    }
    


}