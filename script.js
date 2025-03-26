
//validación para el formulario de contacto <3
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-contacto");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático

        let nombre = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("phone").value.trim();
        let mensaje = document.getElementById("message").value.trim();

        // Validar que los campos no estén vacíos
        if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validar formato de email con expresión regular
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo válido.");
            return;
        }

        // Validar teléfono (solo números y longitud de 10 dígitos)
        let phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(telefono)) {
            alert("Por favor, introduce un número de teléfono válido de 10 dígitos.");
            return;
        }

        // Si pasa todas las validaciones, se puede enviar el formulario
        alert("Formulario enviado con éxito");
        formulario.submit(); // Ahora sí envía el formulario
    });
});

//aquí termina el formulario de contacto <3

// --> Función para vista previa de imágenes del formulario de creación de objetos

document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('imagen-producto');
    const imagePreview = document.getElementById('vista-previa');
    
    inputFile.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.style.display = 'block'; // Muestra la imagen
            imagePreview.src = e.target.result; // Asigna la URL generada al src de la imagen
        };

        if (file) {
            reader.readAsDataURL(file); // Convierte el archivo a una URL y la asigna a la imagen
        }
    });
});

// Fin de la función del formulario

// --> Inicio de la función para la creación de objetos

// ARRAY CON CARACTERÍSTICAS
const productos = [];
function agregarProducto() {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: document.getElementById("nombre-producto").value,
        descripción: document.getElementById("descripcion-producto").value,
        categoria: document.getElementById("categoria-producto").value,
        stock: document.getElementById("stock-producto").value,
        precio: document.getElementById("precio-producto").value,
        peso: document.getElementById("peso-producto").value,
        dimensiones: `${document.getElementById("largo-producto").value} X ${document.getElementById("ancho-producto").value} X ${document.getElementById("alto-producto").value}` ,
        material: obtenerValores().materiales,
        imagen: document.getElementById("imagen-producto").files[0],
        personalización: obtenerValores().personalizacion 
    }

    productos.push(nuevoProducto);
    let jsonArray = JSON.stringify(nuevoProducto);
    document.getElementById("producto-form").reset();
    console.log(jsonArray);
    console.log("Hice algo");
}

// FUNCIÓN QUE OBTIENE LOS VALORES DE CHECKBOXES
function obtenerValores(){
    // Selecciona todos los checkboxes dentro del contenedor
    const checkboxes = document.querySelectorAll('#material-producto .form-check-input');

    // Materiales
    // Array para almacenar los valores seleccionados
    const materiales = [];

    // Recorre los checkboxes y verifica cuáles están seleccionados
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            materiales.push(checkbox.value);
        }
    });

    //Personalización
    const personalizacion = document.getElementById('personalizacion').checked;

    // Devuelve un objeto con las propiedades
    return {
        materiales: materiales.join(', '),
        personalizacion: personalizacion
    }
}

// // IMPLEMENTACIÓN CON JSON
// document.getElementById("btn-crear-producto").addEventListener("click", function (){
//     // Capturar los valores del formulario
//     const nombre = document.getElementById("nombre-producto").value;
//     const descripcion = document.getElementById("descripcion-producto").value;
//     const categoria = document.getElementById("descripcion-producto").value;
//     const stock = document.getElementById("stock-producto");
//     const precio = document.getElementById("precio-producto");
//     const peso = document.getElementById("peso-producto");
//     const dimensiones = document.getElementById("largo-producto");

//     // Crear el objeto JSON
//     const producto = {
//         nombre: nombre,
//         descripcion: descripcion,
//         categoria: categoria,
//         stock: stock,
//         precio: parseFloat(precio),
//         peso: parseFloat(peso),
//         dimensiones: parseFloat(dimensiones) 
//     };

//     // Enviar los datos mediante fetch
//     fetch("/api/productos", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(producto)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("Producto creado: ", data);
//         alert("Producto creado con éxito");
//     })
//     .catch(error => {
//         console.error("Error al crear el producto:", error);
//         alert("Hubo un error al crear el producto");
//     });
// });


// FUNCIÓN QUE LEE LOS DATOS DE LAS CASILLAS
function prueba(){
    console.log("Nombre: " + document.getElementById("nombre-producto").value);
    console.log("Descripción: " + document.getElementById("descripcion-producto").value);
    console.log("Categoría: " + document.getElementById("categoria-producto").value);
    console.log("Stock: " + document.getElementById("stock-producto").value);
    console.log("Precio: " + document.getElementById("precio-producto").value);
    console.log("Peso: " + document.getElementById("peso-producto").value);
    console.log(`Dimensiones: Largo ${document.getElementById("largo-producto").value}, Ancho ${document.getElementById("ancho-producto").value}, Alto ${document.getElementById("alto-producto").value}`);
    console.log(`Material: ${obtenerValores().materiales}`);
    console.log(`Imagen del producto: ${document.getElementById("imagen-producto").files[0]}`);
    console.log(`Personalización: ${obtenerValores().personalizacion}`)
    
    
}

function crearTarjeta(){
    const dsd = 0;
}

// Fin de la función para creación de objetos

