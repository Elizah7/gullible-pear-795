let user=JSON.parse(localStorage.getItem("key"))|| []

function joinbtn(){
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value
    let name=document.querySelector("#first_name").value 

  
    

    let s1=new userdata(email,password,name)
    if(email==="" || password==="" || name==="")
    {
        alert("please enter valid input")
    }else{
        if (check(s1.email)){
            alert("walcome to asos")
            
              user.push(s1)
             localStorage.setItem("key",JSON.stringify(user))
             location.href="signin.html"
        }else{
            alert("this account allready exists")
            location.href="signin.html"
        }
    }
}

function userdata(email,password,name){
    this.email=email;
    this.password=password;
    this.name=name;

}
function check(email){
    let user1=user.filter(function(elem){
        return email===elem.email
    })
    if(user1.length===0){
        return true
    }else{
        return false;
    }
}
