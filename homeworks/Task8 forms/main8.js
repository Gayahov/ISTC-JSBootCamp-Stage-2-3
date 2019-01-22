function validateForm (){
    var validMail = document.getElementById("form_email").value;
    var validPassword = document.getElementById("form_psw").value;
    var confirmPasword = document.getElementById("confirm_psw").value;
    var regex_for_mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regex_for_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;  
   

    if(regex_for_mail.test(validMail) == false){
        document.getElementById("form_email").style.border = "1px solid #e8a0a1"

        document.getElementById("mess_email").style.display = "block"
    }
    if (regex_for_pass.test(validPassword) == false){
        document.getElementById("form_psw").style.border = "1px solid #e8a0a1"
        document.getElementById("mess_pass").style.display = "block"
        
    }
    if (validPassword !== confirmPasword){
        document.getElementById("message").style.display = "block"
    }else {
        document.getElementById("confirm_psw").style.border = "0.5px solid green"
    }


}