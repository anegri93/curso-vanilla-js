import { validateEmail } from "./utils.js";
import { localSave, localLoad, signUp, logIn, saveToken, loadToken, fetchContacts, saveContact, getContactById, deleteContactById, removeToken } from "./api.js"
import { returnPage } from "./secondPage.js";

import { updateContactCount, populateContactsTable, closeModal, showContactDetails} from "./ui.js";

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
            //localSave("user", signUpForm);
            signUp(signUpForm).then((result) =>{
              console.log(result);
              console.log("Guardado!");
              //Save Token Locally
              saveToken(result.data.token);

              //redireccionar
              //document.location = '../express/index.html';
              document.body.innerHTML = returnPage();
            }).catch((error)=>{
                console.log(error);
            })
        }else{

            logIn(signUpForm).then((result) => {
                //Save Token Locally
                saveToken(result.data.token);
                //redireccionar
                initSecondPage();
                document.body.innerHTML = returnPage();
            }); 
            /* let user = localLoad("user");
            if (user === null) {
                signUpAlert.innerHTML = "Este usuario no Existe!";
                signUpAlert.style.display = "block";
                return;
            } else {
                console.log("Redireccionar a la página.");
                
            } */
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


function initSecondPage(){
    let vtoken = loadToken();
    if(!vtoken.length){
        alert("No se ha iniciado sesión.");
        //refrescar la página	
        location.reload();
        return;
    }
    let contacts = [];

    const initApp = async () => {
        contacts = await fetchContacts();        
        console.log("Contacts loaded:", contacts);  // Verifica si los contactos se cargaron correctamente
        updateContactCount(contacts.length);
        populateContactsTable(contacts);
        setupEventListeners();
    }
    initApp();
    
    // Configuración de eventos
    function setupEventListeners() {
        document.getElementById("saveContactBtn").addEventListener("click", handleSaveContact);
        document.querySelector("input[type='search']").addEventListener("input", handleSearch);
    }

    // Función para manejar el evento de búsqueda
    function handleSearch() {
        const searchTerm = document.querySelector("input[type='search']").value.toLowerCase().trim();
        // Filtrar contactos que coinciden con el término de búsqueda
        const filteredContacts = contacts.filter(contact =>
            contact.firstname.toLowerCase().includes(searchTerm) ||
            contact.lastName.toLowerCase().includes(searchTerm) ||
            contact.emailAddress.toLowerCase().includes(searchTerm) ||
            contact.age.toString().includes(searchTerm)
        );
        // Mostrar solo los contactos filtrados
        populateContactsTable(filteredContacts);
        updateContactCount(filteredContacts.length);
    }


    // Manejar el evento de guardar contacto
    async function handleSaveContact() {
        // Capturar los datos del formulario
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;

        const newContact = {
            firstname: firstName,
            lastName: lastName,
            emailAddress: email,
            age: parseInt(age)
        };

        // Guardar el nuevo contacto a través de la API
        const success = await saveContact(newContact);
        if (success) {
            alert("Contacto guardado exitosamente");
            closeModal();
            const contacts = await fetchContacts(); // Actualizar la lista de contactos
            updateContactCount(contacts.length);
            populateContactsTable(contacts);
        } else {
            alert("Error al guardar el contacto");
        }
    }


    async function viewContact(id) {
        // Obtener los datos del contacto mediante la función en api.js   
        const contact = await getContactById(id);
        if (contact) {
            showContactDetails(contact);
        } else {
            alert("No se pudo obtener la información del contacto.");
        }
    }

    // Implementa aquí la lógica para eliminar el contacto
    async function deleteContact(id) {
        const success = await deleteContactById(id);
        if (success) {
            alert("Contacto eliminado exitosamente");
            const contacts = await fetchContacts(); // Actualizar la lista de contactos
            updateContactCount(contacts.length);
            populateContactsTable(contacts);
        } else {
            alert("Error al eliminar el contacto");
        }
    }

    // Implementa aquí la lógica para editar el contacto
    async function editContact(id) {
        console.log("Editar contacto con ID:", id);
        
    }

    window.deleteContact = deleteContact;
    window.viewContact = viewContact;

}