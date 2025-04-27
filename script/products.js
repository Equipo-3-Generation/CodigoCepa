document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('productosContainer');
    const productos = JSON.parse(localStorage.getItem('paginaProductos')) || [];

    productos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
            <div class="card rounded-0 my-3" style="width: 18rem;">
                <div class="imagen-box">
                    <img src="${producto.imagen}" class="card-img-top imagen" alt="${producto.nombre}">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-primary-emphasis fw-bold">${producto.nombre.toUpperCase()}</h5>
                    <p class="card-text text-danger fw-bold">$${producto.precio}</p>
                    <a href="#" class="btn btn-dark rounded-0">Añadir al carrito</a>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
});