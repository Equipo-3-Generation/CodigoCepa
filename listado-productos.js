// link productos https://www.xataka.com/basics/61-proyectos-impresion-3d-utiles-que-te-puedes-imprimir

const productos = [
    { id: 1, nombre: "Soporte para Celular", descripcion: "Base ajustable para sostener el celular en escritorio.", precio: 150, categoria: "Accesorios", material: "Plástico", imagen: "images/soporte-celular.jpg", stock: 50, dimensiones: "10x5x5 cm", peso: "0.2 kg" },
    { id: 2, nombre: "Organizador de Cables", descripcion: "Pequeño accesorio para mantener los cables ordenados.", precio: 120, categoria: "Oficina", material: "Plástico", imagen: "images/organizador-cables.jpg", stock: 100, dimensiones: "5x5x2 cm", peso: "0.1 kg" },
    { id: 3, nombre: "Estante secreto", descripcion: "Estante flotante con cajón oculto.", precio: 180, categoria: "Hogar", material: "Plástico", imagen: "images/estante-secreto.jpg", stock: 30, dimensiones: "30x15x10 cm", peso: "1 kg" },
    { id: 4, nombre: "Clip para Bolsas", descripcion: "Pinza reutilizable para cerrar bolsas herméticamente.", precio: 90, categoria: "Cocina", material: "Plástico", imagen: "images/clip-bolsas.jpg", stock: 75, dimensiones: "3x5x2 cm", peso: "0.05 kg" },
    { id: 5, nombre: "Ganchos para ropa paquete", descripcion: "Paquete de 60 ganchos para ropa", precio: 100, categoria: "Hogar", material: "Plástico", imagen: "images/ganchos-pared.jpg", stock: 40, dimensiones: "8x4x2 cm", peso: "0.15 kg" },
    { id: 6, nombre: "Soporte para Audífonos", descripcion: "Base para mantener los audífonos organizados.", precio: 220, categoria: "Accesorios", material: "Plástico", imagen: "images/soporte-audifonos.jpg", stock: 25, dimensiones: "12x12x20 cm", peso: "0.3 kg" },
    { id: 7, nombre: "Cartera Tarjetero", descripcion: "Estuche compacto para tarjetas de presentación o bancarias.", precio: 160, categoria: "Moda", material: "Plástico", imagen: "images/cartera-tarjetero.jpg", stock: 60, dimensiones: "10x7x1 cm", peso: "0.08 kg" },
    { id: 8, nombre: "Bandejas Portadocumentos", descripcion: "Set de bandejas de varios pisos para organizar documentos.", precio: 280, categoria: "Oficina", material: "Plástico", imagen: "images/bandejas-documentos.jpg", stock: 20, dimensiones: "30x25x15 cm", peso: "0.9 kg" },
    { id: 9, nombre: "Llave para Botellas PET", descripcion: "Destapador de botellas con diseño ergonómico.", precio: 100, categoria: "Cocina", material: "Plástico", imagen: "images/llave-botellas.jpg", stock: 90, dimensiones: "6x3x1 cm", peso: "0.05 kg" },
    { id: 10, nombre: "Maceta Auto Regable", descripcion: "Maceta con sistema de autorriego ideal para plantas pequeñas.", precio: 250, categoria: "Jardinería", material: "Plástico", imagen: "images/maceta-auto-regable.jpg", stock: 35, dimensiones: "15x15x20 cm", peso: "1.5 kg" },
    { id: 11, nombre: "Abrebotellas en forma de gatillo", descripcion: "Destapador en forma de gatillo solo con apretar con un par de dedos para abrir la botella.", precio: 75, categoria: "Accesorios", material: "Plástico", imagen: "images/termo-inteligente.jpg", stock: 45, dimensiones: "25x7x7 cm", peso: "0.4 kg" },
    { id: 12, nombre: "Clip para bolsas de plástico", descripcion: "Paquete de 60 clips para sellar bolsas", precio: 150, categoria: "Cocina", material: "Plástico", imagen: "images/lampara-escritorio.jpg", stock: 15, dimensiones: "40x10x10 cm", peso: "0.6 kg" },
    { id: 13, nombre: "Exprimidor pasta de dientes", descripcion: "Exprimidor de tubo de pasta de dientes paquete con 3 piezas", precio: 70, categoria: "Hogar", material: "Plástico", imagen: "images/mochila-antirrobo.jpg", stock: 20, dimensiones: "45x30x15 cm", peso: "0.8 kg" },
    { id: 14, nombre: "Posavasos", descripcion: "Posavasos con diseño cítrico pack c/20pz", precio: 15, categoria: "Hogar", material: "Plástico", imagen: "images/reloj-inteligente.jpg", stock: 25, dimensiones: "5x5x1 cm", peso: "0.1 kg" },
    { id: 15, nombre: "Organizador de cervezas", descripcion: "Organizador de cervezas con el tamaño justo para poder ponerlas en horizontal dentro de la nevera", precio: 250, categoria: "Hogar", material: "Plástico", imagen: "images/cargador-inalambrico.jpg", stock: 50, dimensiones: "10x10x1 cm", peso: "0.2 kg" }
];

function mostrarProductos() {
    const tabla = document.getElementById("tabla-productos");
    tabla.innerHTML = "";

    productos.forEach((producto, index) => {
        let fila = `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>$${producto.precio}</td>
                <td>${producto.categoria}</td>
                <td>${producto.material}</td>
                <td><img src="${producto.imagen}" alt="${producto.nombre}" width="70"></td>
                <td>${producto.stock}</td>
                <td>${producto.dimensiones}</td>
                <td>${producto.peso}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarProducto(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
                </td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });

    console.log(JSON.stringify(productos, null, 2));
}

function agregarProducto() {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: prompt("Nombre del producto:"),
        descripcion: prompt("Descripción:"),
        precio: parseFloat(prompt("Precio:")),
        categoria: prompt("Categoría:"),
        material: prompt("Material:"),
        imagen: prompt("URL de la imagen:"),
        stock: parseInt(prompt("Stock disponible:")),
        dimensiones: prompt("Dimensiones (Largo x Ancho x Alto):"),
        peso: prompt("Peso en kg:")
    };

    productos.push(nuevoProducto);
    mostrarProductos();
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    mostrarProductos();
}

function eliminarTodo() {
    productos.length = 0;
    mostrarProductos();
}

// Mostrar la lista al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);

