
import {navbar} from "../homepage/"

let append2 = (data) => {
    let h4 = document.getElementById("h4")
    h4.innerHTML = "";
    data.forEach(ele => {
        h4.innerText = ele.name;
    });

}
// localStorage.setItem("useremail", JSON.stringify(vdata))
let usereamil = JSON.parse(localStorage.getItem("useremail")) || []
append2(usereamil)


let display = (data) => {
    let child_box2 = document.getElementById("box2_child1")

    child_box2.innerHTML = " ";

    data.forEach((ele) => {
        let subtotal2 = document.getElementById("subtotal2")
        subtotal2.innerHTML = +subtotal2.innerHTML + (+ele.price)
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        let img = document.createElement("img")
        img.src = ele.image;
        let h4 = document.createElement("h4")
        h4.innerText = ele.name
        let p = document.createElement("p")
        p.innerText = ele.price;
        let p2 = document.createElement("p")
        p2.innerText = ele.type

        div.append(img)
        div2.append(h4,p,p2)
        child_box2.append(div,div2);
    })


}
let vdata = JSON.parse(localStorage.getItem("data"))||[]
console.log(vdata)
display(vdata)
let count = document.querySelector("#count")
count.innerText = vdata.length + " " + " " + "ITEM";
class userdata {
    constructor(f, l, p, a, c, co, po) {
        this.Fname = f,
            this.Lname = l,
            this.phone = p,
            this.address = a,
            this.city = c,
            this.country = co,
            this.postcode = po
    }

}
let myFunction = () => {
    event.preventDefault()
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let add = document.getElementById("add").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let postcode = document.getElementById("postcode").value;

    let data = new userdata(fname, lname, phone, add, city, country, postcode)
    localStorage.setItem("userdata", JSON.stringify(data))
    let udata = JSON.parse(localStorage.getItem("userdata")) || []

    append(udata)


}


let append = (data) => {

    let child_box4 = document.getElementById("child_box_2")
    child_box4.style.display = "none";
    let userdetail = document.getElementById("data")
    userdetail.style.display = "inline";
    userdetail.style.width = "100%"
    userdetail.style.height = "50%";

    userdetail.innerHTML = "";
    let div = document.createElement("div")

    let p = document.createElement("h4")
    p.innerText = data.Fname
    let p2 = document.createElement("h4")
    p2.innerText = data.Lname
    let p3 = document.createElement("h4")
    p3.innerText = data.phone
    let p4 = document.createElement("h4")
    p4.innerText = data.address
    let p5 = document.createElement("h4")
    p5.innerText = data.city
    let p6 = document.createElement("h4")
    p6.innerText = data.country
    let p7 = document.createElement("h6")
    p7.innerText = data.postcode

    let btn = document.createElement("button")
    btn.innerText = "Change"
    btn.addEventListener("click", () => {
        changeValue()
    })
    div.append(p, p2, p3, p4, p5, p6, p7, btn)
    userdetail.append(div)

}


let submit = document.getElementById("submit").addEventListener("click", () => {
    myFunction()
})

let changeValue = () => {
    let child_box4 = document.getElementById("child_box_2")
    child_box4.style.display = "inline";
    let userdetail = document.getElementById("data")
    userdetail.style.display = "none";
}
let tpy = document.getElementById("ttt")
tpy.innerHTML = +subtotal2.innerHTML

let myFunction2 = () => {
    let input = document.getElementById("input").value
    if (input == "Theoriginals") {
        let subtotal2 = document.getElementById("subtotal2")

        tpy.innerHTML = (+subtotal2.innerHTML * 90) / 100
    }
    else {
        alert("Wrong Voucher code")
    }

}

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    myFunction2()
})

let myfuntion3 = ()=>{
    let card = document.getElementById("card").style.display = "none";
 let carddetail = document.getElementById("carddetail").style.display = "inline";
}

let creditcard = document.getElementById("creditcard")
creditcard.addEventListener("click", ()=>{
    myfuntion3()
})

let takinginput = ()=>{
    let cardnumber = document.getElementById("cardnumber").value 
    if(cardnumber.length == 4 || cardnumber.length == 9 || cardnumber.length == 14){
        document.getElementById("cardnumber").value = cardnumber+" ";
        document.getElementById("cardnumber").max = 1;
    }
}

let cardnumber = document.getElementById("cardnumber")
cardnumber.addEventListener("keypress", ()=>{
    takinginput()
})

let cancelfunction = ()=>{
    let card = document.getElementById("card").style.display = "inline";
    let carddetail = document.getElementById("carddetail").style.display = "none";
}

let cancel = document.getElementById("cancel")
cancel.addEventListener("click", ()=>{
    cancelfunction()
})

let takepayment = ()=>{
    let cardnumber =document.getElementById("cardnumber").value
    let selectmon = document.getElementById("selectmon").value
    let selectyear = document.getElementById("selectyear").value
    let name =document.getElementById("name").value
    let cvv = document.getElementById("entercvv").value
   
    if(cardnumber.length<19){
        alert("incorrect card number")
    }
   else if(selectmon == "mon"){
       alert("please select month")
    }
   else if(selectyear == "YEAR"){
        alert("please select year")
    }
   else if(name.length < 8){
       alert("please enter correct name")
    }
   else if(cvv.length<3){
     alert("please enter correct cvv")
    }
  
   
}

let Payment = document.getElementById("Payment")
Payment.addEventListener("click", ()=>{
    takepayment()
})

