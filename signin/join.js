

function joinbtn(){
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value
    let name=document.querySelector("#first_name").value 

    function userdata(email,password,name){
        this.email=email;
        this.password=password;
        this.name=name;

    }
    

    let s1=new userdata(email,password,name)

   if(email==="")
   {
    alert("pleas enter email")
   }

   if(password===""  || password==="123")
   {
    alert("pleas enter right password")
   }

function datachek(){
    let user=JSON.parse(localStorage.getItem("key"))|| []

    user.push(s1)

    localStorage.setItem("key",JSON.stringify(user))

    alert("walcoome to asos")
   
    window.location.href="signin.html"

}
datachek()

}

function datachek1(){
    
}