document.addEventListener('DOMContentLoaded', function () {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const carritoContainer = document.getElementById('carritoContainer');
  const totalCarrito = document.getElementById('totalCarrito');

  function actualizarCarrito() {
      carritoContainer.innerHTML = '';
      let total = 0;

      carrito.forEach((producto, index) => {
          if (!producto || producto.precio == null) return;

          const subtotal = producto.precio * (producto.cantidad || 1);
          total += subtotal;

          const fila = document.createElement('tr');
          fila.innerHTML = `
              <td>
                  <img src="${producto.imagen}" alt="${producto.nombre}" width="50" class="me-2">
                  ${producto.nombre}
              </td>
              <td>$${producto.precio.toFixed(2)}</td>
              <td>
                  <input type="number" min="1" value="${producto.cantidad || 1}" class="form-control cantidad-input" data-index="${index}">
              </td>
              <td>$${subtotal.toFixed(2)}</td>
              <td>
                  <button class="btn btn-danger btn-sm eliminar-btn" data-index="${index}">🗑️</button>
              </td>
          `;
          carritoContainer.appendChild(fila);
      });

      totalCarrito.textContent = `$${total.toFixed(2)}`;
  }

  // Evento para cambiar cantidad
  carritoContainer.addEventListener('input', function (e) {
      if (e.target.classList.contains('cantidad-input')) {
          const index = e.target.dataset.index;
          carrito[index].cantidad = parseInt(e.target.value);
          localStorage.setItem('carrito', JSON.stringify(carrito));
          actualizarCarrito();
          actualizarContadorCarrito();
      }
  });

  // Evento para eliminar productos
  carritoContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('eliminar-btn')) {
          const index = e.target.dataset.index;
          carrito.splice(index, 1);
          localStorage.setItem('carrito', JSON.stringify(carrito));
          actualizarCarrito();
          actualizarContadorCarrito();
      }
  });

  actualizarCarrito();
});