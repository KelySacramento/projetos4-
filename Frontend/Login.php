<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $usuarios = [
        
    ];

    if (array_key_exists($email, $usuarios) && $usuarios[$email] === $password) {
        $_SESSION['usuario'] = $email;
        header("Location: bem_vindo.php"); 
        exit();
    } else {
        echo "<p style='color: red; text-align: center;'>E-mail ou senha inválidos!</p>";
    }
}
?>
