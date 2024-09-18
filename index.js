const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let generateBtn = document.getElementById("generate-btn")

function generate() {
  let passOne = ""
  let passTwo = ""

  for (let i = 0; i < 15; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length)
    let randomIndexTwo = Math.floor(Math.random() * characters.length)
    passOne += characters[randomIndexOne]
    passTwo += characters[randomIndexTwo]
  }

  passwordOne.textContent = passOne
  passwordTwo.textContent = passTwo
}


//COPY ON CLICK

function copyToClipboard(passwordElement) {
  const passwordTExt = passwordElement.textContent
  navigator.clipboard.writeText(passwordTExt)
    .then(() => {
      alert("Password copied: " + passwordText)
    })
    .catch(err => {
      alert("Failed to copy: ", err)
    })
}

//Add event listeners to copy on click
passwordOne.addEventListener("click", function() {
  copyToClipboard(passwordOne)
})

passwordTwo.addEventListener("click", function() {
  copyToClipboard(passwordTwo)
})