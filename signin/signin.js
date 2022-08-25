function btn(){

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;

    function data(email,password){
        this.email=email;
        this.password=password;
    }
let obj=new data(email,password)


if(email===null || password===null)
{
    console.log(email)
    alert("please enter the email id and password")
}

let lcdata=JSON.parse(localStorage.getItem("key"))||[]

lcdata.push(obj)

localStorage.setItem("key",JSON.stringify(lcdata))

alert("Signup successful!")
location.reload()
}