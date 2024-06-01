<?php
// registrar.php

// Conexión a la base de datos (reemplaza con tus propios datos)
$conexion = new mysqli("localhost", "root", "", "basededatos");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Verificar que las contraseñas coincidan
if ($password != $confirm_password) {
    die("Las contraseñas no coinciden");
}

// Consultar si el correo ya está registrado
$sql_verificar = "SELECT verificado FROM usuarios WHERE email = '$email'";
$resultado_verificar = $conexion->query($sql_verificar);

if ($resultado_verificar->num_rows > 0) {
    $fila = $resultado_verificar->fetch_assoc();
    
    if ($fila['verificado'] == 1) {
        // El correo ya está registrado y verificado
        echo "Este correo ya está registrado. Puedes iniciar sesión.";
        // Botón de iniciar sesión
        echo '<button onclick="window.location.href=\'login.php\'">Iniciar Sesión</button>';
    } else {
        // El correo está registrado pero no verificado
        echo "Usuario registrado. Solo falta revisar el correo para la verificación.";
        // Botón de reenviar verificación a email
        echo '<button onclick="window.location.href=\'reenviar_verificacion.php?email='.$email.'\'">Reenviar Verificación</button>';
    }

    $conexion->close();
    exit();
}

// Hash de la contraseña
$hashed_password = password_hash($password, PASSWORD_BCRYPT);

// Generar código de verificación
$codigo_verificacion = md5(uniqid(rand(), true));

// Insertar usuario en la base de datos
$sql = "INSERT INTO usuarios (nombre, email, password, codigo_verificacion) VALUES ('$nombre', '$email', '$hashed_password', '$codigo_verificacion')";
if ($conexion->query($sql) === TRUE) {
    // Obtener la URL base del sitio de forma dinámica
    $url_base = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";

    // URL de verificación
    $url_verificacion = $url_base . "/verificar.php?email=$email&codigo=$codigo_verificacion";

    // Cuerpo del mensaje
    $mensaje = "Hola $nombre,\n\n";
    $mensaje .= "Gracias por registrarte en tu-sitio.com. Para verificar tu correo electrónico, haz clic en el siguiente enlace:\n";
    $mensaje .= "$url_verificacion\n\n";
    $mensaje .= "Si no has solicitado este registro, puedes ignorar este mensaje.\n";

    // Cabeceras del correo
    $cabeceras = 'From: tu-email@tu-sitio.com' . "\r\n" .
                 'Reply-To: tu-email@tu-sitio.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    // Enviar correo electrónico
    if (mail($email, 'Verificación de Correo Electrónico', $mensaje, $cabeceras)) {
        // Redirigir al usuario a una página de éxito
        header("Location: registro_exitoso.php");
    } else {
        echo "Error al enviar el correo electrónico de verificación.";
    }
} else {
    echo "Error al registrar el usuario: " . $conexion->error;
}

$conexion->close();
?>
