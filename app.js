let checkpoint = function(){
    password = document.getElementsByClassName("pass 1").value
    confirm_password = document.getElementsByClassName("pass 2").value
    if (password == confirm_password){
        document.getElementsByClassName("pass 1").style.borderColor = "Green"
    }
    return false
}

let checkTrue = function(string1,string2){
    if (string1 == string2){
        return true
    }
    return false
}

document.getElementsByClassName("pass 1").addEventListener("keyup", checkpoint)

document.getElementsByClassName("pass 2").addEventListener("keyup", checkpoint)
