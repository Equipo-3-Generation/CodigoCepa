
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
    const inputFile = document.getElementById('carga-imagen');
    const imagePreview = document.getElementById('vista-previa"');
    
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
const productos = [];
function agregarProducto() {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: document.getElementById("nombre-producto").value,
        descripción: document.getElementById("descripcion-producto").value,
        categoria: document.getElementById("categoria-producto").value,
        

    }
}
// Fin de la función para creación de objetos

