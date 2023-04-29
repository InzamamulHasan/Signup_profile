
function display(){
    let curuser=JSON.parse(localStorage.getItem("CurrUser"))||{};

    console.log(curuser)
    let fullName=document.querySelector(".pname");
    console.log(fullName)
    let email=document.querySelector(".pemail");
    let password=document.querySelector(".ppassword");
    if(curuser.name==undefined){
        fullName.innerText="Full Name : "
    }else{
        fullName.innerText="Full Name : "+curuser.name;
    }
    if(curuser.email==undefined){
        email.innerText="Email : "
    }else{    
       email.innerText="Email : "+curuser.email;
    }
   if(curuser.password==undefined){
       password.innerText="Password : "
   }else{
       password.innerText="Password : "+curuser.password;
   }


}
display();

let logout=document.querySelector(".logout");
logout.addEventListener("click",()=>{
    localStorage.removeItem("CurrUser");
    display();
  
})

let signup=document.querySelector(".signup");
signup.addEventListener("click",()=>{
   
    let obj=JSON.parse(localStorage.getItem("CurrUser"))||{};
    
    if(obj.token==undefined){
        window.location.href="./index.html";
    }else{
        window.location.href="./profile.html";
    }
})

let profile=document.querySelector(".profile");
profile.addEventListener("click",()=>{
    window.location.href="./profile.html";
})