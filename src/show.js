const password = document.getElementById("pass");

const checked = document.getElementById("show");


checked.onclick = () => {

    password.type = checked.click ? "text" : "password";

}