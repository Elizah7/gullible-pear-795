let data = [
    {
      "name": "South Beach Man colour pop polyester t-shirt in cream",
      "price": "18.00",
      "image": "https://images.asos-media.com/products/south-beach-man-colour-pop-polyester-t-shirt-in-cream/201289152-1-white?$n_480w$&wid=476&fit=constrain",
      "colour":"Cream"
    },
    {
      "image": "https://images.asos-media.com/products/selected-homme-zip-through-coach-jacket-in-grey/203162922-1-clouddancer?$n_480w$&wid=476&fit=constrain",
      "name": "Selected Homme zip through coach jacket in grey",
      "price": "69.00",
      "colour": "Grey"
     
    },
    {
      "image": "https://images.asos-media.com/products/asos-design-oversized-polo-t-shirt-in-black-pink-stripe-with-front-print/202373494-1-pink?$n_480w$&wid=476&fit=constrain",
      "name": "ASOS DESIGN oversized polo t-shirt in black & pink stripe with front print",
      "price": "28.00",
      "colour": "Multi"
      
    },
    {
      "image": "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-off-white-with-photographic-fruit-back-print/203102912-1-snowwhite?$n_480w$&wid=476&fit=constrain",
      "name": "ASOS DESIGN oversized t-shirt in off white with photographic fruit back print",
      "price": "24.00",
      "colour": "Off white"
      
    },
    {
      "image": "https://images.asos-media.com/products/sergio-tacchini-everything-you-need-to-win-t-shirt-with-backprint-in-tan-exclusive-to-asos/202831629-1-tan?$n_480w$&wid=476&fit=constrain",
      "name": "Sergio Tacchini 'everything you need to win' t-shirt with backprint in tan - exclusive to ASOS",
      "price": "30.00",
      "colour": "Multi"
      
    },
    {
      "image": "https://images.asos-media.com/products/asos-design-relaxed-vest-in-dusty-blue-with-text-print/202145284-1-darkslate?$n_480w$&wid=476&fit=constrain",
      "name": "ASOS DESIGN relaxed vest in dusty blue with text print",
      "price": "15.00",
      "colour": "Blue"
      
    },
    {
      "image": "https://images.asos-media.com/products/obey-museum-of-love-t-shirt-in-beige/203710819-1-beige?$n_480w$&wid=476&fit=constrain",
      "name": "Obey museum of love t-shirt in beige",
      "price": "40.00",
      "colour": "Multi"
     
    },
    {
      "image": "https://images.asos-media.com/products/asos-design-revere-shirt-in-core-black-and-white-stripe/202748771-1-black?$n_480w$&wid=476&fit=constrain",
      "name": "ASOS DESIGN revere shirt in core black and white stripe",
      "price": "28.00",
      "colour": "Multi"
      
    },
    {
      "image": " https://images.asos-media.com/products/asos-design-relaxed-pique-revere-polo-in-black/203073668-1-black?$n_480w$&wid=476&fit=constrain",
      "name": "ASOS DESIGN relaxed pique revere polo in black",
      "price": "20.00",
      "colour": "Black"
     
    },
    {

      "image": "https://images.asos-media.com/products/topman-knitted-crewneck-with-all-over-camo-in-khaki/203006649-1-khaki?$n_480w$&wid=476&fit=constrain",
      "name": "Topman knitted crewneck with all over camo in khaki",
      "price": "40.00",
      "colour": "Khaki"
      
       
    },
    {

      "image": "https://images.asos-media.com/products/new-era-new-york-yankees-oversize-stripe-t-shirt-in-green/203613146-1-green?$n_480w$&wid=476&fit=constrain",
      "name": "New Era New York Yankees oversize stripe t-shirt in green",
      "price": "30.00",
      "colour": "Multi"
     
      
    },
    {

      "image": "https://images.asos-media.com/products/new-era-heritage-half-time-backprint-t-shirt-in-green/203608880-1-green?$n_480w$&wid=476&fit=constrain",
      "name": "New Era heritage half time backprint t-shirt in green",
      "price": "32.00",
      "colour": "Multi"
      
      
    },
]

import {navbar,footer} from "../homepage/script.js"
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("footer1").innerHTML = footer();


let product = [];
   console.log(product);

  const appendData = (data) => {
     
    data.map(({image, name, price, colour}) =>{
       //console.log(image, name,  price);

       let div = document.createElement("div");
       div.setAttribute("id", "card");

       let img = document.createElement("img");
       img.setAttribute("class", "img-product");
       img.src = image;

       
       let title = document.createElement("p");
       title.setAttribute("class", "name-product");
       title.innerText= name;

       

       let cost = document.createElement("p");
       cost.setAttribute("class", "cost");
       cost.innerText= `£ ${price}`;
       cost.style.color = "#d01345"
        
       let div2 = document.createElement("div");
       div2.setAttribute("class", "div2");

       let div1 = document.createElement("div");
       div1.setAttribute("id","price-div");

      

       let div4 = document.createElement("div");
       div4.setAttribute("class", "add");

       let list = document.createElement("i");
       list.setAttribute("class", "list")

      let span = document.createElement("span");
      span.innerText = "Added to WishList";
      span.setAttribute("class","span-list")


      let elm ={
        image: image,
        name : name,
        price : price,
        color : colour,
      }
       
       div4.append(list, span)
       
       div2.append(img, div4)
       div1.append(cost)
       div.append(div2, title, div1);

       div.addEventListener("click", function(){
        productDetails(elm);
       })
       document.querySelector(".products").append(div);


    })

  }
  appendData(data);



  let productDetails = (el) =>{

    product.push(el);
    console.log(product);

    localStorage.setItem("details", JSON.stringify(product));
    window.location.href = "proDetails.html";
  }


  //read_more_button

   const readMoreBtn = document.querySelector(".read-more-btn");

   const text = document.querySelector(".promo");

   readMoreBtn.addEventListener("click", (e)=> {
    text.classList.toggle("show-more");
    if(readMoreBtn.innerText === "View Less")
    {
      readMoreBtn.innerText = "View More";
    }
    else 
    {
      readMoreBtn.innerText = "View Less";
    }
   });