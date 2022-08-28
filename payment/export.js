let bagdata = JSON.parse(localStorage.getItem("bagdata"))||[]
let display = (data) => {
    let child_box2 = document.getElementById("box2_child1")

    child_box2.innerHTML = " ";

    data.forEach((ele) => {
        let subtotal2 = document.getElementById("subtotal2")
        subtotal2.innerHTML =` ${+subtotal2.innerHTML + (+ele.price)}` 
        let dd = document.createElement("div")
        let div = document.createElement("div")
        div.setAttribute("id", "childdiv")
        let div2 = document.createElement("div")
        div2.setAttribute("id", "childdiv2")
        let img = document.createElement("img")
        img.src = ele.image;
        let h4 = document.createElement("h4")
        h4.innerText = ele.name
        let p = document.createElement("p")
        p.innerText =`£  ${ele.price}` ;
        let p2 = document.createElement("p")
        p2.innerText = ele.color
    
        div.append(img)
        div2.append(h4,p,p2)
        dd.append(div,div2)
        child_box2.append(dd);
    })


}

export {display}