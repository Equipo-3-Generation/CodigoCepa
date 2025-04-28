document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioEncontrado = usuarios.find(user => user.email === email && user.password === password);

        if (!usuarioEncontrado) {
            mostrarModal('Correo o contraseña incorrectos.');
            return;
        }

        localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
        mostrarModal('Inicio de sesión exitoso 🎉');

        setTimeout(() => {
            window.location.href = '/index.html';
        }, 2000);
    });

    // Ver contraseña
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="bi bi-eye-fill"></i>' : '<i class="bi bi-eye-slash-fill"></i>';
    });

});

function mostrarModal(mensaje) {
    const modalBody = document.getElementById('infoModalBody');
    modalBody.textContent = mensaje;

    const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
}
