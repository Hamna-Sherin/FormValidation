function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isStrongPassword(password) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}


$("#submit").click(function(){
    $("#submit").css("border-color" , "white");
    $("#error").html("")
    $("#success").html("")
    var errormessage = "";
    var missingField = "";
    var phone = $("#mobile").val();

    // required fields
    if($("#firstName").val() == ""){
        missingField += "<p>First Name not filled</p>"
    }

    if($("#lastName").val() == ""){
        missingField += "<p>Last Name not filled</p>"
    }

    if($("#dob").val() == ""){
        missingField += "<p>Date of Birth not filled</p>"
    }

    if($("#mobile").val() == ""){
        missingField += "<p>Mobile not filled</p>"
    }

    if($("#email").val() == ""){
        missingField += "<p>Email id not filled</p>"
    }

    if($("#password").val() == ""){
        missingField += "<p>Password not filled</p>"
    }

  
    // form validation
    if(isEmail($("#email").val()) == false){
        errormessage += "<p>Enter a valid Email id</p>"
    }

    if($.isNumeric($("#mobile").val()) == false ){
        errormessage += "<p>Enter a valid mobile number</p>"
    }

    if(phone.length != 10){
        errormessage += "<p>Mobile number must be exactly 10 digits</p>"
    }

    if($("#password").val() != $("#confPass").val()){
        errormessage += "<p>Password does not match</p>"
    } 

    if(isStrongPassword($("#password").val()) == false){
        errormessage += "<p>Password must be atleast 8 characters and include uppercase, lowercase, and a number</p>"
    }

    

    // registration validation
    if(missingField != ""){
        $("#error").html(missingField)
        $("#error").css("border","2px solid red")
        $("#error").css("color","red")
    }
    else if(errormessage != ""){
        $("#error").html(errormessage)
        $("#error").css("border","2px solid red")
        $("#error").css("color","red")
    }
    else{
        $("#success").html("Successfully Registered")
        $("#success").css("border","2px solid green")
        $("#success").css("color","green")
    }
})