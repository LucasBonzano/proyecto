<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $isEmailRegistered = checkEmail($email);

    if ($isEmailRegistered) {
        echo 'El correo electrónico ya está registrado.';
    } else {
        registerNewUser($name, $email, $password);
        echo 'Usuario registrado con éxito.';
    }
} else {
    header('Location: ../registro.html');
    exit();
}

function checkEmail($email) {
    return false;
}

function registerNewUser($name, $email, $password) {
}
?>
