const API_URL = "http://localhost:3000/api";

async function fetchContacts() {
    try {
        const response = await fetch(`${API_URL}/contacts`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener los contactos:", error);
        return [];
    }
}

// Función para agregar un nuevo contacto
async function saveContact(contact) {
    try {
        const response = await fetch(`${API_URL}/contact/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)         
        });
        return response.ok;
    } catch (error) {
        console.error("Error al guardar el contacto:", error);
        return false;
    }
}

// Función para obtener un contacto por su ID
async function getContactById(id) {
    try {
        const response = await fetch(`${API_URL}/contact/search/${id}`);        
        if (response.ok) {
            return await response.json();
        } else {
            console.error("Error al obtener el contacto:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el contacto:", error);
        return null;
    }
}


// Función para eliminar un contacto por su ID
async function deleteContactById(id) {
    try {
        const response = await fetch(`${API_URL}/contact/delete/${id}`, {
            method: "DELETE"
        });
        return response.ok;
    } catch (error) {
        console.error("Error al eliminar el contacto:", error);
        return false;
    }
}

