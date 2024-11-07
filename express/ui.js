// Actualizar el conteo de contactos en el encabezado
function updateContactCount(count) {
    const cantidadContactos = document.getElementById("cantidadContactos");
    cantidadContactos.innerHTML = "Contactos: " + count;
}

// Población de la tabla con contactos
function populateContactsTable(contacts) {
    const tableBody = document.getElementById("contactTableBody");
    tableBody.innerHTML = "";

    contacts.forEach(contact => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${contact.firstname}</td>
            <td>${contact.lastName}</td>
            <td>${contact.emailAddress}</td>
            <td>${contact.age}</td>
            <td>
                <button id="viewContactBtn" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#viewContactModal" onclick="viewContact('${contact._id}')">
                    <i class="bi bi-eye"></i> Ver
                </button>
                <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#updateContactModal" onclick="editContact('${contact._id}')">
                    <i class="bi bi-pencil"></i> Editar
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteContact('${contact._id}')">
                    <i class="bi bi-trash"></i> Borrar
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Cerrar el modal de creación de contacto
function closeModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById("createContactModal"));
    if (modal) {
        modal.hide();
    }
}

// Función para mostrar los detalles del contacto en el modal
function showContactDetails(contact) {
    // Actualizar los elementos del modal con los datos del contacto
    document.getElementById("viewFirstName").textContent = contact.firstname;
    document.getElementById("viewLastName").textContent = contact.lastName;
    document.getElementById("viewEmailAddress").textContent = contact.emailAddress;
    document.getElementById("viewAge").textContent = contact.age;

    // Mostrar el modal
    const viewModal = new bootstrap.Modal(document.getElementById("viewContactModal"));
    viewModal.hide();
}
