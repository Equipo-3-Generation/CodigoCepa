document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Capturar datos del formulario
        const nombre = document.getElementById('nombreProducto').value.trim();
        const descripcion = document.getElementById('descripcionProducto').value.trim();
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

        // Crear objeto producto
        const producto = {
            nombre,
            descripcion,
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

        alert('Producto guardado exitosamente.');
        form.reset();
    });
});