let user=JSON.parse(localStorage.getItem("key"))|| []
function btn(){

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;

    let obj1={
        email:email,
        password:password
    }

    if (check(obj1.email, obj1.password)){
        alert("signin sucessful")
        localStorage.setItem("key2",JSON.stringify(obj1))
        location.href="./index.html"
    }else {
        alert("wrong email or password")
    }
}


function check(email, password){

    let user=JSON.parse(localStorage.getItem("key"))|| []

    let user2 = user.filter(function(element){
        return email===element.email && password===element.password
    })

    if(user2.length===0)
    {
        return false;
    }else{
        return true;
    }
    
}