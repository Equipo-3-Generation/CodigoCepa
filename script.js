
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

document.getElementById('btn-crear-producto').addEventListener('click', function() {
    // Obtener los materiales seleccionados
    const materiales = [];
    if (document.getElementById('material-pla').checked) materiales.push('PLA');
    if (document.getElementById('material-abs').checked) materiales.push('ABS');
    if (document.getElementById('material-petg').checked) materiales.push('PETG');
    
    // Crear el objeto con los datos del producto
    const producto = {
        nombre: document.getElementById('nombre-producto').value,
        descripcion: document.getElementById('descripcion-producto').value,
        categoria: document.getElementById('categoria-producto').value,
        stock: parseInt(document.getElementById('stock-producto').value) || 0,
        precio: parseFloat(document.getElementById('precio-producto').value) || 0,
        peso: parseFloat(document.getElementById('peso-producto').value) || 0,
        dimensiones: {
            largo: parseFloat(document.getElementById('largo-producto').value) || 0,
            ancho: parseFloat(document.getElementById('ancho-producto').value) || 0,
            alto: parseFloat(document.getElementById('alto-producto').value) || 0,
            unidad: 'cm'
        },
        materiales: materiales,
        personalizacion: document.getElementById('personalizacion').checked,
        // Para la imagen podríamos guardar el nombre del archivo o procesarla luego
        imagen: document.getElementById('imagen-producto').files[0]?.name || null
    };
    
    // Convertir a JSON
    const productoJSON = JSON.stringify(producto, null, 2);
    
    // Mostrar en consola
    console.log('Producto en formato JSON:', productoJSON);
    
    // Limpiar el formulario
    document.getElementById('producto-form').reset();
    
    // Ocultar vista previa de imagen
    const vistaPrevia = document.getElementById('vista-previa');
    if (vistaPrevia) {
        vistaPrevia.style.display = 'none';
        vistaPrevia.src = '';
    }
});
// Fin de la función para creación de objetos

