import { validateEmail } from "./utils.js";
import { localSave, localLoad } from "./api.js"

let signUpForm = {
    email: null,
    password: null
}

let signUpBtn = document.getElementById("signUpBtn");

signUpBtn.onclick = (event) => {
    signUpForm.email = null;
    signUpForm.password = null;  
    document.getElementById("signUpFormLabel").innerHTML = "Registro";
    document.getElementById("signUpTittle").innerHTML = "Completa los datos para Registrarte";
    document.getElementById("temsCheck").style.display = "block";
    document.getElementById("signUpCreateBtn").innerHTML = "Crear";
};

let signUpCreateBtn = document.getElementById("signUpCreateBtn");
let closeButton = document.getElementById("closeButton");
let signUpAlert = document.getElementById("signUpAlert");

const hideModal = () => {
    //Hide Modal
    var myModalEl = document.getElementById('signUpForm');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}

closeButton.onclick = (event) =>{
    event.preventDefault();
    hideModal();
}

signUpCreateBtn.onclick = (event) => {
    event.preventDefault();
    signUpForm.email = document.getElementById("signUpEmail").value;
    signUpForm.password = document.getElementById("signUpPassword").value;

    let alert = validateEmail(signUpForm.email) ? "" : "Ingresa un email Válido (Ejemplo: mail@mail.com).";
    alert += signUpForm.password ? "" : "\nIngrese una Contraseña Válida.";

    if(alert !== ""){
        signUpAlert.innerHTML = alert;
        signUpAlert.style.display = "block";
    }else{    
        //Create or Load User
        if (document.getElementById("signUpCreateBtn").textContent === "Crear") {
            localSave("user", signUpForm);
            console.log("Guardado!");
        }else{
            let user = localLoad("user");
            if (user === null) {
                signUpAlert.innerHTML = "Este usuario no Existe!";
                signUpAlert.style.display = "block";
                return;
            } else {
                console.log("Redireccionar a la página.");
                
            }
        }
        hideModal();
    }
};

let loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = (event) => {
    signUpForm.email = null;
    signUpForm.password = null;

    document.getElementById("signUpFormLabel").innerHTML = "Iniciar Sesión";
    document.getElementById("signUpTittle").innerHTML = "";
    document.getElementById("temsCheck").style.display = "none";
    document.getElementById("signUpCreateBtn").innerHTML = "Ingresar";


};
