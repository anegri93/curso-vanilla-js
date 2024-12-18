export const returnPage = () => {
    return `
    <!-- Tabla -->
    <div class="container my-5">
        <div class="justify-content-between">
            <h2 id="cantidadContactos">Contactos</h2>
            <div class="d-flex gap-2">
                <input  id="searchContactInput" class="form-control" type="search" placeholder="Buscar contacto">
                <button id="createContactBtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createContactModal">Crear</button>
            </div>
        </div>
        <table class="table table-striped mt-3">
            <thead >
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Edad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="contactTableBody">
                <!-- Acá entran los contactos -->
            </tbody>
        </table>
    </div>

    <!-- Modal Agregar Contacto-->
    <div class="modal fade" id="createContactModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createContactModalLabel">Crear Contacto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="firstName" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Ingrese el nombre">
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Ingrese el apellido">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese el email">
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Edad</label>
                        <input type="number" class="form-control" id="age" placeholder="Ingrese la edad">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="saveContactBtn">Guardar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal de Visualización de Contacto -->
    <div class="modal fade" id="viewContactModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="viewContactModalLabel">Detalles del Contacto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Nombre:</strong> <span id="viewFirstName"></span></p>
                    <p><strong>Apellido:</strong> <span id="viewLastName"></span></p>
                    <p><strong>Email:</strong> <span id="viewEmailAddress"></span></p>
                    <p><strong>Edad:</strong> <span id="viewAge"></span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal de actualizacion de contactos -->
    <div class="modal fade" id="updateContactModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updateContactModalLabel">Crear Contacto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="firstName" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="updateFirstName">
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="updateLastName">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="updateEmailAddress">
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Edad</label>
                        <input type="number" class="form-control" id="updateAge">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="updateContactBtn">Guardar</button>
                </div>
            </div>
        </div>
    </div>
    `
};