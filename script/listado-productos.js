// link productos https://www.xataka.com/basics/61-proyectos-impresion-3d-utiles-que-te-puedes-imprimir

document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('productList');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    productos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
            <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Precio:</strong> $${producto.precio}</li>
                        <li class="list-group-item"><strong>Stock:</strong> ${producto.stock} piezas</li>
                        <li class="list-group-item"><strong>Peso:</strong> ${producto.peso} g</li>
                        <li class="list-group-item"><strong>Dimensiones:</strong> ${producto.dimensiones}</li>
                        <li class="list-group-item"><strong>Material:</strong> ${producto.materiales.join(', ')}</li>
                        <li class="list-group-item"><strong>Personalización:</strong> ${producto.personalizacion ? "Sí" : "No"}</li>
                    </ul>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
});

/*
function enviarProducto(index, destino) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productos[index];
    
    let clave;
    if (destino === 'inicio') {
        clave = 'productosEnInicio';
    } else if (destino === 'catalogo') {
        clave = 'productosEnCatalogo';
    }

    const lista = JSON.parse(localStorage.getItem(clave)) || [];
    lista.push(producto);
    localStorage.setItem(clave, JSON.stringify(lista));
    alert(`Producto enviado a ${destino === 'inicio' ? 'inicio' : 'catálogo'} correctamente.`);
}
*/