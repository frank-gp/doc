<?php
// inicio.php

// Verificar si el usuario ha iniciado sesión (puedes ajustar esto según tu sistema de sesión)
session_start();

// Redirigir a la página de inicio de sesión si no hay sesión activa
if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.php");
    exit();
}

// Obtener información del usuario (puedes ajustar esto según tu base de datos)
$usuario_id = $_SESSION['usuario_id'];
$usuario_nombre = $_SESSION['usuario_nombre'];

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido</title>
</head>
<body>
    <h1>Bienvenido, <?php echo $usuario_nombre; ?>!</h1>
    <p>Esta es la página de inicio después de iniciar sesión.</p>
    <p><a href="logout.php">Cerrar Sesión</a></p>
</body>
</html>
