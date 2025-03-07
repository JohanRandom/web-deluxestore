// Declaración de variables con let
let nombre = "Johan Moreno";  // Cadena (string)
let edad = 22;  // Número (integer)
let esEstudiante = true;  // Booleano

// Declaración de constantes
const pais = "Colombia";
const ciudad = "Bogotá";

// Mostrar datos en consola
console.log(nombre, edad, esEstudiante);
console.log(pais, ciudad);

// Operaciones matemáticas
let numero1 = 10;
let numero2 = 5;
console.log("Suma:", numero1 + numero2);
console.log("Multiplicación:", numero1 * numero2);
console.log("División:", numero1 / numero2);

// Concatenación de texto
let texto1 = "Bienvenido a";
let texto2 = "Deluxe Store";
console.log(texto1 + " " + texto2);

// Validación de contraseñas en el formulario
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');

            if (password && confirmPassword && password.value !== confirmPassword.value) {
                alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
                event.preventDefault();
            }
        });
    }

});
