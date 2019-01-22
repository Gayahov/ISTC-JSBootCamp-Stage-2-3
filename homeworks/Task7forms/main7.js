function myFunction() {
    var inp_name = document.getElementById("name").value;
    console.log(inp_name);
    //var inp_email = document.getElementById("email").value;
    //var inp_tel = document.getElementById("tel").value;
    //var inp_pass = document.getElementById("password").value;
    if (inp_name & inp_mail & inp_tel & inp_pass){
        document.getElementById("name-1").innerHTML = "the mame is: " +  inp_name;
        document.getElementById("email-1").innerHTML = "the email is: "  + inp_email;
    }
    //document.getElementById("name-1").innerHTML = "the mame is: " +  inp_name;
    //document.getElementById("email-1").innerHTML = inp_email;
    //document.getElementById("tel-1").innerHTML = inp_tel;
    //document.getElementById("pass-1").innerHTML = inp_pass;
  }