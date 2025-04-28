document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Capturar datos del formulario
        const nombre = document.getElementById('nombreProducto').value.trim();
        const descripcion = document.getElementById('descripcionProducto').value.trim();
        const categoriaSelect = document.getElementById('categoriaProducto');
        const categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;
        const precio = parseFloat(document.getElementById('precioProducto').value);
        const stock = parseInt(document.getElementById('stockProducto').value);
        const dimensiones = `${document.getElementById('largoProducto').value}x${document.getElementById('anchoProducto').value}x${document.getElementById('altoProducto').value} cm`;
        const peso = parseFloat(document.getElementById('pesoProducto').value);
        const imagen = document.getElementById('formFile').value; // Aquí debes usar <input type="text"> para que el usuario pegue la URL
        const personalizacion = document.getElementById('personalizacion').checked;

        // Material
        const materiales = [];
        if (document.getElementById('materialPLA').checked) materiales.push('PLA');
        if (document.getElementById('materialABS').checked) materiales.push('ABS');
        if (document.getElementById('materialPETG').checked) materiales.push('PETG');

        // Validación de entradas
        if (!nombre || !descripcion || isNaN(precio) || isNaN(stock) || isNaN(peso) || !imagen) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Crear objeto producto
        const producto = {
            nombre,
            descripcion,
            categoria,
            precio,
            stock,
            dimensiones,
            peso,
            imagen,
            materiales,
            personalizacion
        };

        // Guardar en localStorage
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));

        // alert('Producto guardado exitosamente.');
        const toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();

        // Limpiar el formulario
        form.reset();

        // Limpiar la vista previa de la imagen
        imagePreview.src = "";
        imagePreview.style.display = 'none';
    });

    // Mostrar vista previa de imagen al escribir URL
    const inputImagen = document.getElementById('formFile');
    const imagePreview = document.getElementById('imagePreview');

    inputImagen.addEventListener('input', function() {
        const url = inputImagen.value.trim();
        if (url) {
            imagePreview.src = url;
            imagePreview.style.display = 'block';
        } else {
            imagePreview.style.display = 'none';
        }
    });
});