 // Credenciales para el login
const validUsername = "admin";
const validPassword = "1234";

 // autentificación
function authenticate(event) {
    event.preventDefault();  // Evitar el comportamiento por defecto del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

// Detectar la tecla "Enter" en los campos de usuario y contraseña
document.getElementById("username").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        authenticate();  // Llamar a la función authenticate si se presiona "Enter"
    }
});

document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        authenticate();  // Llamar a la función authenticate si se presiona "Enter"
    }
});

 // Calcular la edad
function calcularEdad(fecha) {
    const [dia, mes, anio] = fecha.split("-").map(Number);
    const nacimiento = new Date(anio, mes - 1, dia); // Crear objeto Date con la fecha de nacimiento
    const hoy = new Date(); // Fecha actual
    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    // Ajustar si el cumpleaños aún no ha pasado este año
    if (
        hoy.getMonth() < nacimiento.getMonth() || 
        (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
}

// Encontrar todos los elementos con la clase `fecha_nacimiento` y calcular su edad
document.querySelectorAll(".fecha_nacimiento").forEach((fechaElem) => {
    const fechaTexto = fechaElem.textContent.replace("Fecha de nacimiento: ", "");
    const edad = calcularEdad(fechaTexto);

    const edadElem = fechaElem.parentElement.querySelector(".edad");  // Buscar el elemento .edad dentro del mismo formulario
    if (edadElem) {
        edadElem.textContent = `Edad: ${edad} años`;
    }
});