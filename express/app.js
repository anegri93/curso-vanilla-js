// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", async () => {
    const contacts = await fetchContacts();
    updateContactCount(contacts.length);
    populateContactsTable(contacts);
    setupEventListeners();
});

// Configuración de eventos
function setupEventListeners() {
    document.getElementById("saveContactBtn").addEventListener("click", handleSaveContact);
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


//window.viewContact = viewContact;