document.getElementById('loginForm').onsubmit = function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Aquí deberías hacer la validación o cualquier otra cosa antes de enviar el formulario
    // Por ejemplo, podrías hacer una verificación rápida para asegurarte de que se ingresaron datos
    if (email === '' || password === '') {
        var loginErrorMessage = document.getElementById('loginErrorMessage');
        loginErrorMessage.textContent = 'Por favor ingresa tu correo electrónico y contraseña.';
        loginErrorMessage.style.display = 'block';
        event.preventDefault(); // Detener el envío del formulario
    }
    // Si se requiere más validación, aquí es donde debería ir.

    // Si todo está bien, el formulario se enviará automáticamente
};
