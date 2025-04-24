document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    let name = document.getElementById("name").value.trim();
    let telephone = document.getElementById("tel").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Arreglo para guardar errores
    let errores = [];

    // Obtener usuarios guardados en localStorage
    let savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Validaciones básicas
    if (name === "") {
        errores.push("El nombre es obligatorio.");
    }

    // Validación de número de teléfono (solo números y 10 dígitos)
    if (telephone.length !== 10 || isNaN(telephone)) {
        errores.push("El teléfono debe tener 10 números.");
    } 

    if (!email.includes("@") || !email.includes(".")) {
        errores.push("Correo electrónico no válido.");
    }

    if (password.length < 8) {
        errores.push("La contraseña debe tener mínimo 8 caracteres.");
    }

    if (password !== confirmPassword) {
        errores.push("Las contraseñas no coinciden.");
    }

    // Verificar si el usuario ya está registrado
    let usuarioExistente = savedUsers.some(user => user.email === email);
    if (usuarioExistente) {
        errores.push("Este correo ya está registrado. Intenta iniciar sesión.");
    }

    // Mostrar errores o guardar el usuario
    let errorDiv = document.getElementById("errores");
    errorDiv.innerHTML = ""; // Limpiar errores anteriores

    if (errores.length > 0) {
        // Mostrar errores en la pantalla
        erroes.array.forEach(error => {
            let alerta = document.createElement("div");
            alerta.className = "alert alert-danger";
            alerta.textContent = errores;
            errorDiv.appendChild(alerta);
        });
        return; 
    }


    let user = { name, telephone, email };
    localStorage.setItem("usuario", JSON.stringify(user)); // Guarda usuario actual en localStorage

    savedUsers.push({ email, password });
    localStorage.setItem("users", JSON.stringify(savedUsers));

    alert("Registro exitoso");

    window.location.href = "/CodigoCepa/pages/login.html"; // Redirige a la página de perfil
});


