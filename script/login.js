// Función para mostrar mensaje de éxito
function showSuccessMessage() {
    const successDiv = document.getElementById("successMessage");
    successDiv.style.display = "block"; // Muestra el mensaje
    setTimeout(() => {
        successDiv.style.display = "none"; // Oculta el mensaje después de 3 segundos
    }, 3000);
}

// Capturar el formulario
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtener valores del formulario
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Crear un objeto con los datos del usuario
    const newUser = {
        email: email,
        password: password
    };

    // Verificar si hay datos previos en LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Agregar el nuevo usuario al arreglo existente
    users.push(newUser);

    // Almacenar el arreglo actualizado en LocalStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Mostrar mensaje de confirmación
    showSuccessMessage();

    // Limpiar formulario después de enviar
    document.getElementById("loginForm").reset();

    window.location.href = "/CodigoCepa/index.html"; // Redirige a la página de perfil
});