const inputPsd = document.getElementById("password");
const inputEmail = document.getElementById("email")
const errorPsd = document.querySelector(".error")
const subBtn = document.querySelector('button')

subBtn.addEventListener('click' , ()=>{
    localStorage.setItem("Email(logged)" ,inputEmail.value)
    localStorage.setItem("password(logged)" , inputPsd.value)
})

inputPsd.addEventListener("blur", (e) => {
    if (inputPsd.value.length < 8) {
        errorPsd.style.display = 'block'
        inputPsd.style.backgroundColor = "red"
    }
})

document.addEventListener('copy' , (a)=>{
    a.preventDefault()
})

document.addEventListener('contextmenu' , (b)=>{
  b.preventDefault()
})

window.addEventListener('keydown' , (c)=>{
    if(c.key === "F12"){
        c.preventDefault()
    }
})
