document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();
});
// link productos https://www.xataka.com/basics/61-proyectos-impresion-3d-utiles-que-te-puedes-imprimir
let productos = [
    { id: 1, nombre: "Soporte para Celular", descripcion: "Base ajustable para sostener el celular en escritorio.", precio: 150 },
    { id: 2, nombre: "Organizador de Cables", descripcion: "Pequeño accesorio para mantener los cables ordenados.", precio: 120 },
    { id: 3, nombre: "Estante secreto ", descripcion: "Estante flotante con un cajón oculto debajo para guardar dinero o pequeños objetos", precio: 180 },
    { id: 4, nombre: "Clip para Bolsas", descripcion: "Pinza reutilizable para cerrar bolsas herméticamente.", precio: 90 },
    { id: 5, nombre: "Ganchos para Pared", descripcion: "Soportes resistentes para colgar llaves, mochilas o abrigos.", precio: 200 },
    { id: 6, nombre: "Soporte para Audífonos", descripcion: "Base para mantener los audífonos organizados en el escritorio.", precio: 220 },
    { id: 7, nombre: "Cartera tarjetero - Porta Tarjetas", descripcion: "Estuche compacto para tarjetas de presentación o bancarias.", precio: 160 },
    { id: 8, nombre: "Bandejas portadocumentos", descripcion: "Set de bandejas portadocumentos de varios pisos.", precio: 280 },
    { id: 9, nombre: "Llave para Botellas PET", descripcion: "Destapador de botellas con un diseño especial en forma de gatillo con el que sólo tendrás que apretar con un par de dedos para abrir tu botella.", precio: 100 },
    { id: 10, nombre: "Maceta Auto Regable", descripcion: "Maceta con sistema de autorriego ideal para plantas pequeñas.", precio: 250 }
];

function mostrarProductos() {
    const listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = "";
    productos.forEach(producto => {
        listaProductos.innerHTML += `
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text">Precio: $${producto.precio} MXN</p>
                        <button class="btn btn-warning" onclick="modificarProducto(${producto.id})">Modificar</button>
                        <button class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function agregarProducto() {
    const nuevoProducto = { id: productos.length + 1, nombre: "Nuevo Producto", descripcion: "Descripción genérica", precio: Math.floor(Math.random() * 100) };
    productos.push(nuevoProducto);
    mostrarProductos();
}

function modificarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        producto.nombre = prompt("Nuevo nombre:", producto.nombre) || producto.nombre;
        producto.descripcion = prompt("Nueva descripción:", producto.descripcion) || producto.descripcion;
        producto.precio = parseFloat(prompt("Nuevo precio:", producto.precio)) || producto.precio;
        mostrarProductos();
    }
}

function eliminarProducto(id) {
    productos = productos.filter(p => p.id !== id);
    mostrarProductos();
}

function borrarLista() {
    productos = [];
    mostrarProductos();
}







/* let productos = [
    { id: 1, nombre: "Abrebotellas", descripcion: "Abrebotellas para una sola mano, puede servir para apretar la tapa de una botella o aflojarla", precio: 80 },
    { id: 2, nombre: "Ganchos de ropa", descripcion: "Paquete de 50 Ganchos para colgar ropa", precio: 145 },
    { id: 3, nombre: "Exprimidor de tubo de pasta de dientes", descripcion: "Exprimidor de tubo de pasta de dientes", precio: 60 },
    { id: 4, nombre: "Reloj", descripcion: "Reloj de pulsera", precio: 80 },
    { id: 5, nombre: "Mochila", descripcion: "Mochila impermeable", precio: 35 }
];

function actualizarInterfaz() {
    let tabla = document.getElementById("productosTabla");
    let jsonOutput = document.getElementById("jsonOutput");

    tabla.innerHTML = productos.map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.nombre}</td>
            <td>${p.descripcion}</td>
            <td>$${p.precio}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="modificarProducto(${p.id})">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="borrarProducto(${p.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");

    jsonOutput.textContent = JSON.stringify(productos, null, 2);
}

function agregarProducto() {
    let nombre = prompt("Nombre del producto:");
    let descripcion = prompt("Descripción:");
    let precio = parseFloat(prompt("Precio:"));

    if (nombre && descripcion && !isNaN(precio)) {
        let nuevo = { id: productos.length + 1, nombre, descripcion, precio };
        productos.push(nuevo);
        actualizarInterfaz();
    } else {
        alert("Datos inválidos.");
    }
}

function modificarProducto(id) {
    let producto = productos.find(p => p.id === id);
    if (producto) {
        producto.nombre = prompt("Nuevo nombre:", producto.nombre);
        producto.descripcion = prompt("Nueva descripción:", producto.descripcion);
        producto.precio = parseFloat(prompt("Nuevo precio:", producto.precio));
        actualizarInterfaz();
    } else {
        alert("Producto no encontrado.");
    }
}

function borrarProducto(id) {
    productos = productos.filter(p => p.id !== id);
    actualizarInterfaz();
}

function borrarLista() {
    productos = [];
    actualizarInterfaz();
}

// Inicializar la interfaz al cargar la página
document.addEventListener("DOMContentLoaded", actualizarInterfaz);*/