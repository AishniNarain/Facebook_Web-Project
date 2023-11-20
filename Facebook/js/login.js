function checkData(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;

    let name = localStorage.getItem("first")
    let getemail = localStorage.getItem("email");
    let getpassword = localStorage.getItem("password");

    if(email == getemail){
        if(password == getpassword){
            document.write('<h1><center>');
            document.write("Welcome"+" ");
            document.write(name);
            document.write('</center></h1>')
        }
        else{
            alert("Wrong password");
        }
    }
    else{
        alert("Login Fail");
    }
}
