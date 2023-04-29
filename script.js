let signUpBtn=document.querySelector(".btn");

let names=document.getElementById("name");
let email=document.getElementById("email");
let password=document.getElementById("password");
let confpass=document.getElementById("confpassword");

let err=document.querySelector(".err");
let success=document.querySelector(".succes");

let arr=JSON.parse(localStorage.getItem("Datas"))||[];

signUpBtn.addEventListener("click",()=>{

    if(names.value==""||email.value==""||password.value==""||confpass.value==""){
        err.innerText="Error : All the fields are mandatory";
        err.style.color="red";
        return;
    }
    if(password.value!=confpass.value){
        err.innerText="Confirm correct password";
        err.style.color="green";
        return;
    }

    success.innerText="Successfully Signed Up!"
    success.style.color="green";
    let lowcase="abcdefghijklmnopqrstuvuxyz";
    let upcase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num="0123456789";
    let symbols="!@#$%&*";
    let charr=[lowcase,upcase,num,symbols];
    let token="";
    for(let i=0;i<16;i++){
        let ran=Math.floor(Math.random()*4);
        let found=charr[ran];
        let ran2=Math.floor(Math.random()*found.length);
        token+=found.charAt(ran2);
    }

    let obj={
        name:names.value,
        email:email.value,
        password:password.value,
        token:token
    }
    arr.push(obj);
    localStorage.setItem("CurrUser",JSON.stringify(obj))
    localStorage.setItem("Datas",JSON.stringify(arr));
    window.location.href="./profile.html";
})

let profile=document.querySelector(".profile");
profile.addEventListener("click",()=>{
   
    let obj=JSON.parse(localStorage.getItem("CurrUser"))||{};
    
    if(obj.token==undefined){
        window.location.href="./index.html";
    }else{
        window.location.href="./profile.html";
    }
})

let signup=document.querySelector(".signup");
signup.addEventListener("click",()=>{
    window.location.href="./index.html";
})