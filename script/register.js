document.getElementById('registrationForm').onsubmit = function(event) {
    var email = document.getElementById('email').value;
    if (checkEmailRegistered(email)) {
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'El correo electrónico ya está registrado. ¿Deseas iniciar sesión?';
        errorMessage.style.display = 'block';
        event.preventDefault();
    }
};

function checkEmailRegistered(email) {

    return false;
}
