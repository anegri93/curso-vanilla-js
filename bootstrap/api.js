export const saveToken = (token) => {
    let today = new Date();
    today.setDate(today.getDate() + 1);
    document.cookie = `token=${token}; expires=${today}`;
}

export const loadToken = () => {
    //return document.cookie;
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find(cookie => cookie.startsWith("token="));
    return tokenCookie ? tokenCookie.split("=")[1] : "";
    
}

export const removeToken = () => { 
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

export const localSave = (dbName, obj) => {
    localStorage.setItem(dbName, JSON.stringify(obj));
}

export const localLoad = (dbName) => {
    return localStorage.getItem(dbName);
}

export const signUp = (props) => { 
    let response = new Promise((resolve, reject) =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(props);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/user", requestOptions)
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
    return response;
}

export const logIn = (props) => {
    let response = new Promise((resolve, reject) =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify(props);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://localhost:3000/api/login", requestOptions)
          .then((response) => response.json())
          .then((result) => resolve(result))
          .catch((error) => reject(error));
    });
    return response;
}

// Express anterior

const API_URL = "http://localhost:3000/api";

/* export async function fetchContacts() {
    try {
        const response = await fetch(`${API_URL}/contacts`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener los contactos:", error);
        return [];
    }
} */

// Función para obtener los contactos
export async function fetchContacts(token) {
    try {
        const response = await fetch(`${API_URL}/contacts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) {
            console.error("Error en la respuesta de la API:", response.status, response.statusText);
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error("Error al obtener los contactos:", error);
        return [];
    }
}


// Función para agregar un nuevo contacto
export async function saveContact(contact) {
    let token = loadToken();
    try {
        const response = await fetch(`${API_URL}/contact/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
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
export async function getContactById(id) {
    let token = loadToken();
    try {
        const response = await fetch(`${API_URL}/contact/search/${id}`, {
            method: "GET",
            headers: {  
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }   
        });       
        if (response.ok) {
            const contact = await response.json();
            return contact;
        } else {
            console.error("Error al obtener el contacto:", response.status, response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el contacto:", error);
        return null;
    }
}


// Función para eliminar un contacto por su ID
export async function deleteContactById(id) {
    let token = loadToken();
    try {
        const response = await fetch(`${API_URL}/contact/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return response.ok;
    } catch (error) {
        console.error("Error al eliminar el contacto:", error);
        return false;
    }
}

