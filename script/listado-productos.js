// link productos https://www.xataka.com/basics/61-proyectos-impresion-3d-utiles-que-te-puedes-imprimir

document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.querySelector('#tablaProductos tbody');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    productos.forEach((producto, index) => {
        const row = document.createElement('tr');
    
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.categoria}</td>
            <td>${producto.stock}</td>
            <td>${producto.precio}</td>
            <td>${producto.peso}</td>
            <td>${producto.dimensiones.largo} x ${producto.dimensiones.ancho} x ${producto.dimensiones.alto}</td>
            <td>
                ${producto.materiales.PLA ? 'PLA ' : ''}
                ${producto.materiales.ABS ? 'ABS ' : ''}
                ${producto.materiales.PETG ? 'PETG' : ''}
            </td>
            <td>${producto.personalizacion ? 'Sí' : 'No'}</td>
            <td><img src="${producto.imagen}" alt="Imagen" style="width:50px;"></td>
            <td>
                <button class="btnMostrarInicio">Mostrar en Inicio</button>
                <button class="btnMostrarProductos">Mostrar en Productos</button>
                <button class="btnEliminarProducto">Eliminar</button>
            </td>
        `;
    
        tabla.appendChild(row);
    
        // Botón Mostrar en Inicio
        row.querySelector('.btnMostrarInicio').addEventListener('click', () => {
            productos[index].mostrarEnInicio = true;
            localStorage.setItem('productos', JSON.stringify(productos));
            alert('Producto agregado a la página de inicio');
        });
    
        // Botón Mostrar en Productos
        row.querySelector('.btnMostrarProductos').addEventListener('click', () => {
            productos[index].mostrarEnProductos = true;
            localStorage.setItem('productos', JSON.stringify(productos));
            alert('Producto agregado a la página de productos');
        });
    
        // Botón Eliminar
        row.querySelector('.btnEliminarProducto').addEventListener('click', () => {
            productos.splice(index, 1);
            localStorage.setItem('productos', JSON.stringify(productos));
            location.reload();
        });
    });
});