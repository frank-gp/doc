<?php
// reenviar_verificacion.php

// Conexión a la base de datos (reemplaza con tus propios datos)
$conexion = new mysqli("localhost", "root", "", "basededatos");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$email = isset($_GET['email']) ? $_GET['email'] : '';

if (empty($email)) {
    die("Correo electrónico no válido.");
}

// Consultar si el correo ya está registrado
$sql_verificar = "SELECT id, nombre, verificado FROM usuarios WHERE email = '$email'";
$resultado_verificar = $conexion->query($sql_verificar);

if ($resultado_verificar->num_rows > 0) {
    $fila = $resultado_verificar->fetch_assoc();
    
    if ($fila['verificado'] == 1) {
        // El correo ya está registrado y verificado
        echo "Este correo ya está registrado y verificado. Puedes iniciar sesión.";
    } else {
        // El correo está registrado pero no verificado
        // Generar código de verificación
        $codigo_verificacion = md5(uniqid(rand(), true));

        // Actualizar el código de verificación en la base de datos
        $sql_actualizar_codigo = "UPDATE usuarios SET codigo_verificacion = '$codigo_verificacion' WHERE email = '$email'";
        if ($conexion->query($sql_actualizar_codigo) === TRUE) {
            // Obtener la URL base del sitio de forma dinámica
            $url_base = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";

            // URL de verificación
            $url_verificacion = $url_base . "/verificar.php?email=$email&codigo=$codigo_verificacion";

            // Cuerpo del mensaje
            $mensaje = "Hola " . $fila['nombre'] . ",\n\n";
            $mensaje .= "Has solicitado reenviar el correo de verificación en tu-sitio.com. Para verificar tu correo electrónico, haz clic en el siguiente enlace:\n";
            $mensaje .= "$url_verificacion\n\n";
            $mensaje .= "Si no has solicitado este reenvío, puedes ignorar este mensaje.\n";

            // Cabeceras del correo
            $cabeceras = 'From: tu-email@tu-sitio.com' . "\r\n" .
                         'Reply-To: tu-email@tu-sitio.com' . "\r\n" .
                         'X-Mailer: PHP/' . phpversion();

            // Enviar correo electrónico
            if (mail($email, 'Reenvío de Verificación de Correo Electrónico', $mensaje, $cabeceras)) {
                echo "Se ha enviado un nuevo correo de verificación a tu dirección de correo electrónico. Por favor, revisa tu bandeja de entrada.";
            } else {
                echo "Error al enviar el correo electrónico de verificación.";
            }
        } else {
            echo "Error al actualizar el código de verificación: " . $conexion->error;
        }
    }

    $conexion->close();
    exit();
} else {
    echo "Correo no registrado.";
}

$conexion->close();
?>
