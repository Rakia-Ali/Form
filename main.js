const Name = document.querySelector("#name")
const Email = document.querySelector("#email")
const Password = document.querySelector("#pass")
const ConfirmPass = document.querySelector("#con")

const Savebtn = document.querySelector("#save")
const error=document.querySelector("#error")
const PasswordError=document.querySelector("#PassError")
const confirmPassError=document.querySelector("#confirmPassError")
const passwordIcon = document.querySelector("#passwordIcon")
// const confirmIcon = document.querySelector("#confirmIcon")



passwordIcon.addEventListener("click" , function(){
    if(Password.type == "password"){
        Password.type = "text"
    }
    else{
        Password.type = "password"
    }
})
// confirmIcon.addEventListener("click" , function(){
//     if(ConfirmPass.type == "password"){
//         ConfirmPass.type = "text"
//     }
//     else{
//         ConfirmPass.type = "password"
//     }
// })


Savebtn.addEventListener("click",function(event){
    event.preventDefault()
    checkEmpty()
})
function checkEmpty(){
    if(Name.value=="" && Email.value=="" && Password.value=="" && ConfirmPass.value==""){
      error.innerHTML="Fadlan soo Buuxi Form "
      error.style.color="red"
      Name.style.border="2px red solid"
      Email.style.border="2px red solid"
      Password.style.border="2px red solid"
      ConfirmPass.style.border="2px red solid"
      passwordIcon.style.marginTop="50px"
    //   confirmIcon.style.marginBottom="-53px"

    }
    else{
        error.innerHTML="Login successful"
    }
    if(Password.value.length < 6){
        PasswordError.innerHTML = "Password must be at least 6"
        PasswordError.style.color = "red"

    }
    else{
        PasswordError.innerHTML = "Strong password"
        PasswordError.style.color = "blue"
    }
    if(ConfirmPass.value !=  Password.value ){
        confirmPassError.innerHTML = "Password are not same"
    }
    
    else{
        confirmPassError.innerHTML ="Password Match"
        confirmPassError.style.color = "blue"
    }

}
function checkPassword(){
    if(Password.value.length<6){
        error.innerHTML="Password is weakly"
    }
    else{
        error.innerHTML=""
    }}