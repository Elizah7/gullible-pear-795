let user=JSON.parse(localStorage.getItem("key"))|| []
function btn(){

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
  user.forEach(function(elem){
    
    if(elem.password===password){
        alert("Signup successful!")
    }else{
        alert("wrong email or password")
    }
   })
location.reload()
}