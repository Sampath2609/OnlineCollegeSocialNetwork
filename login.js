function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "bearcat" && password == "bearcat"){
    alert ("Login successfully");
    window.location = "StudentLogin.html"; // Redirecting to other page.
    return false;
    }else if( username == "admin" && password == "admin"){
        alert ("Login successfully");
        window.location = "admin1.html"; // Redirecting to other page.
        return false;
        }else if( username == "faculty" && password == "faculty"){
            alert ("Login successfully");
            window.location = "facultymain.html"; // Redirecting to other page.
            return false;
            }
    else{
        alert ("Login failed");
    }
}