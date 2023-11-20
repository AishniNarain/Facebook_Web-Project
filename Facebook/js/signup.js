function saveData(){
    let first_name = document.getElementById("first").value;
    let second_name = document.getElementById("second").value;
    let email = document.getElementById("email").value;
    let re_email = document.getElementById("re-email").value;
    let password = document.getElementById("pwd").value;
    let day= document.getElementById("day").value;
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    
    localStorage.setItem("first",first_name);
    localStorage.setItem("second",second_name);
    localStorage.setItem("email",email);
    localStorage.setItem("re-email",re_email);
    localStorage.setItem("password",password);
    localStorage.setItem("day",day);
    localStorage.setItem("year",year);
    localStorage.setItem("month",month);
    localStorage.setItem("gender",gender);

}