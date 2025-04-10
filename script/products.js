function mostrarProductosInicio() {
    const contenedor = document.getElementById("productos-inicio");
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];

    const productosFiltrados = productosGuardados.filter(p => p.mostrarEn === "inicio" || p.mostrarEn === "ambos");

    productosFiltrados.forEach(p => {
        contenedor.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">${p.descripcion}</p>
                    <p class="card-text"><strong>$${p.precio}</strong></p>
                </div>
            </div>
        `;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('productosPagina');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    const productosPagina = productos.filter(p => p.mostrarEnProductos === true);

    productosPagina.forEach(producto => {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.imagen}" style="width:100px;">
            <p>${producto.descripcion}</p>
            <p><strong>$${producto.precio} MXN</strong></p>
        `;
        contenedor.appendChild(card);
    });
});