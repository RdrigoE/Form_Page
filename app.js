
let password = document.getElementById("password")
let confirm_password = document.getElementById("confirm_password");

let checkpoint = function(){
    if (password.value == confirm_password.value){
        document.getElementById("password").style.borderColor = "Green"
        document.getElementById("confirm_password").style.borderColor = "Green"
        document.getElementById("error").style.display = "none"
        return
    }
    document.getElementById("password").style.borderColor = "Red"
    document.getElementById("confirm_password").style.borderColor = "Red"
    document.getElementById("error").style.display = "block"
    return
}

password.onkeyup = checkpoint;
confirm_password.onkeyup = checkpoint;