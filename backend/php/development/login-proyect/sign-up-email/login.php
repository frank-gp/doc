<?php
// login.php

// Inicia la sesión
session_start();

// Configuración de limitación de tasa
$limite_intentos = 2; // Número máximo de intentos permitidos
$tiempo_bloqueo = 30; // Tiempo de bloqueo en segundos (5 minutos)

// Obtén la dirección IP del usuario
$ip_usuario = $_SERVER['REMOTE_ADDR'];

// Conexión a la base de datos (reemplaza con tus propios datos)
$conexion = new mysqli("localhost", "root", "", "basededatos");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Verifica si existe un contador de intentos en la sesión
if (!isset($_SESSION['intentos'][$ip_usuario])) {
    $_SESSION['intentos'][$ip_usuario] = 0;
}

// Verifica si el usuario está bloqueado
if (isset($_SESSION['bloqueo'][$ip_usuario]) && $_SESSION['bloqueo'][$ip_usuario] > time()) {
    // Usuario bloqueado, puedes redirigir a una página de bloqueo o mostrar un mensaje
    echo "Has excedido el número máximo de intentos. Por favor, espera un momento antes de intentarlo de nuevo.";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Consulta para obtener el hash de la contraseña desde la base de datos
    $sql = "SELECT id, nombre, password FROM usuarios WHERE email = ?";
    $stmt = $conexion->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($id, $nombre, $hashed_password);

        if ($stmt->fetch()) {
            // Verificar contraseña
            if (password_verify($password, $hashed_password)) {
                // Inicia sesión (puedes implementar tu propio sistema de sesiones)
                $_SESSION['usuario_id'] = $id;
                $_SESSION['usuario_nombre'] = $nombre;

                // Redirigir a la página de inicio o a la página que desees
                header("Location: inicio.php");
                exit();
            } else {
                // Incrementa el contador de intentos si la autenticación falla
                $_SESSION['intentos'][$ip_usuario]++;

                // Verifica si se alcanza el límite de intentos
                if ($_SESSION['intentos'][$ip_usuario] >= $limite_intentos) {
                    // Bloquea al usuario por un tiempo determinado
                    $_SESSION['bloqueo'][$ip_usuario] = time() + $tiempo_bloqueo;
                    echo "Has excedido el número máximo de intentos. Tu cuenta ha sido bloqueada. Por favor, espera un momento antes de intentarlo de nuevo.";
                    exit();
                } else {
                    echo "Contraseña incorrecta.";
                }
            }
        } else {
            echo "Usuario no encontrado.";
        }

        $stmt->close();
    } else {
        echo "Error al preparar la consulta: " . $conexion->error;
    }
}

// Resto del código de inicio de sesión...
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
</head>
<body>
    <h1>Iniciar Sesión</h1>
    <form action="login.php" method="post">
        Email: <input type="email" name="email" required value="fgp555@gmail.com"><br>
        Contraseña: <input type="password" name="password" required value="Electron5.pe"><br>
        <input type="submit" value="Iniciar Sesión">
    </form>
    <p><a href="signup.php">¿No tienes una cuenta? Regístrate aquí</a></p>
</body>
</html>
