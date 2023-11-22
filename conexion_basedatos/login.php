<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $user = findUserByEmail($email);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['name'];

        header('Location: ../index.html');
        exit();
    } else {
        echo 'El correo electrónico o la contraseña no son correctos.';
    }
} else {
    header('Location: ../login.html');
    exit();
}

function findUserByEmail($email) {
    return null;
}
?>
