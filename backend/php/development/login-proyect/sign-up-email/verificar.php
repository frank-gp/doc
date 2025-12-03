<?php
// verificar.php

// Conexión a la base de datos (reemplaza con tus propios datos)
$conexion = new mysqli("localhost", "root", "", "basededatos");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$email = isset($_GET['email']) ? $_GET['email'] : '';
$codigo_verificacion = isset($_GET['codigo']) ? $_GET['codigo'] : '';

echo $email . $codigo_verificacion . "<br>"; 

// Actualizar el estado de verificación del usuario
$sql = "UPDATE usuarios SET verificado = 1 WHERE email = ? AND codigo_verificacion = ?";
$stmt = $conexion->prepare($sql);

if ($stmt) {
    $stmt->bind_param("ss", $email, $codigo_verificacion);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Correo electrónico verificado con éxito. Ahora puedes ";
        // Enlace a la página de inicio de sesión (login.php)
        echo '<a href="login.php">iniciar sesión</a>.';
    } else {
        echo "Error al verificar el correo electrónico.";
    }

    $stmt->close();
} else {
    echo "Error al preparar la consulta: " . $conexion->error;
}

$conexion->close();
?>
